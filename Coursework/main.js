$('#drinkSearch').click(function(){
 event.preventDefault();
  console.log("All these contain gin");

    $.getJSON("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", function(Result) {
    	console.log(Result)

<<<<<<< HEAD
    })

})
=======
    });

});
>>>>>>> 1fd3c3c08a5abb3389926c1187f8caa5af89f221
