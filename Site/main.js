$('#drinkSearch').click(function(){
  var word = document.getElementById("sbar").value;
  event.preventDefault();
  console.log("All these contain gin");
  console.log(word)

    $.getJSON("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", function(Result) {
    	console.log(Result)
    });

});
