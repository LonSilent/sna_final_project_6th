Parse.initialize("HAycAB0xf0Lgvp5hzqGzGdN5n80Fz25cvmgcVxUi", "9GdZGVNZV0sngbvQAmWWZv2g81PUfp16cftmXTc7");

	var GameScore = Parse.Object.extend("Food_Comment");
var query = new Parse.Query(GameScore);
query.equalTo("restaurant", "5");
query.find({
	success: function(results) {

		alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
    	var object = results[i];
    	var obj = document.getElementById("A");
    	obj.innerHTML = object.get('restaurant');
    	var objB=document.getElementById("B");
    	objB.src=object.get('pic').url();
var categoryItemObj=document.getElementById("categoryitem");
categoryItemObj.innerHTML='<img  src="'+object.get('pic').url()+'" class="pic-select"><div class = "category-detail"><h2>'+object.get('restaurant')+'</h2></div>';
/*$(".category-item").append('<div class="category-item">
					<img  id="B" class="pic-select">
					<div class = "category-detail">
						<h2 id="A"></h2>
						<p>不規則形狀的外皮軟嫩又保有口感，每粒肉圓的蝦仁數量，就是擺在外頭的那一個，內餡完全是豬肉餡，不過調味也滿不賴的，好吃！</p>		 
					</div>					
				</div>');
    	*/
    	alert(object.id + ' - ' + object.get('restaurant'));
    }
},
error: function(error) {
	alert("Error: " + error.code + " " + error.message);
}
});

/*
var GameScore = Parse.Object.extend("Food_Comment");
var query = new Parse.Query(GameScore);
query.equalTo("restaurant", "5");
query.find({
	success: function(results) {

		alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
    	var object = results[i];

    	var obj = document.getElementById("A");
    	obj.innerHTML = object.get('restaurant');
    	var objB=document.getElementById("B");
    	objB.src=object.get('pic').url();

    	alert(object.id + ' - ' + object.get('restaurant'));
    }
},
error: function(error) {
	alert("Error: " + error.code + " " + error.message);
}
});
*/
