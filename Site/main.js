//Search results hidden on page load
//Add ingredient box on load
$(document).ready(function(){
   $("#resultsbox").toggle(false);
    $("#resultsTable").toggle(false);

    });



    //run the ingredient search
    $("#schbutton").click(function(){

      var ingInput = document.getElementById("ingredientInput").value;
      console.log(ingInput);

      $.getJSON("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+ ingInput, function(ingResult) {
        console.log(ingResult)


      });


    });


//Code executed when button is clicked
  $('#drinkSearch').click(function(){
    //Gather searchterms
    var word = document.getElementById("sbar").value;
    //Show results div, hide default main page
    $( "#mainPage").toggle(false);
    $( "#resultsbox").toggle(true);

    //Stop button from refreshing page (default function)
    event.preventDefault();
    console.log(word)

    //Get API response using searchterms
      $.getJSON("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ word, function(Result) {
      	console.log(Result)




        Result.drinks.forEach((drink) => {
          var drinkName = drink.strDrink;
          console.log(drinkName);
    const drinkEntries = Object.entries(drink),
      //Build arrays out of the two sets of keys
      [
        ingredientsArray,
        measuresArray
      ] = [
        "strIngredient",
        "strMeasure"
      ].map((keyName) => Object.assign([], ...drinkEntries
          .filter(([key, value]) => key.startsWith(keyName))
          .map(([key, value]) => ({[parseInt(key.slice(keyName.length))]: value})))),

      // Filters empty values based on the ingredients
      {
        finalIngredients,
        finalMeasures
      } = ingredientsArray.reduce((results, value, index) => {
        if(value && value.trim() || measuresArray[index] && measuresArray[index].trim()){
          results.finalIngredients.push(value);
          results.finalMeasures.push(measuresArray[index]);
        }

        return results;
      }, {
        finalIngredients: [],
        finalMeasures: []
      }),

      // zip both arrays
      ingredientsWithMeasures = finalIngredients
        .map((value, index) => [finalMeasures[index], value]);

    // Output
    console.log("Ingredients:", finalIngredients);
    console.log("Measures:", finalMeasures);

    $('#resultsTable > tbody:last').append( "<tr><td>"+ drinkName + "</td> + <td>"+ ingredientsWithMeasures + "</td></tr>" );


    console.log("All ingredients and measures:\n", ingredientsWithMeasures
      .map(([measure, ingredient]) => `${(measure || "").trim()} ${(ingredient || "").trim()}`)
      .join("\n"));
  });

      });

  });
