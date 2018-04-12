$('#drinkSearch').click(function(){
  var word = document.getElementById("sbar").value;
  event.preventDefault();
  console.log(word)

    $.getJSON("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ word, function(Result) {
    	console.log(Result)
    });

});
