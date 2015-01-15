Parse.initialize("HAycAB0xf0Lgvp5hzqGzGdN5n80Fz25cvmgcVxUi", "9GdZGVNZV0sngbvQAmWWZv2g81PUfp16cftmXTc7");


var Food_CommentObject = Parse.Object.extend("Food_Comment");
var query = new Parse.Query(Food_CommentObject);
query.equalTo("foodtype","美式料理");
query.find({
	success: function(results) {

		//alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
    	var object = results[i];
      /*  $("#tab1").html(function(){
            var restaurantObj = object.get('restaurant');
        var picObj=object.get('pic').url();
return "<div class='category-item'><ul>
                                        <li class='introduce'>評等：<p id='star_rate'></p></li>
                                        <li class='introduce'>餐廳：<p id='name'>"+object.get('restaurant')+"</p></li>
                                        <li class='introduce'>電話：<p id='telephone'>"+object.get('telephone')+"</p></li>
                                        <li class='introduce'>營業時間：<p id='worktime'></p></li>
                                        <li class='introduce'>地址：<p id='address'></p></li>
                                    </ul> </div>"
            "<div class='category-item'>
                                <a href='objectpage.html' title='Link'><img  id='pic-select'></a>
                                <div class = 'category-detail'>
                                    <ul>
                                        <li class='introduce'>評等：<p id='star_rate'></p></li>
                                        <li class='introduce'>餐廳：<p id='name'>'+object.get('restaurant')+'</p></li>
                                        <li class='introduce'>電話：<p id='telephone'>'+object.get('telephone')+'</p></li>
                                        <li class='introduce'>營業時間：<p id='worktime'></p></li>
                                        <li class='introduce'>地址：<p id='address'></p></li>
                                    </ul>
                                </div>
                            </div>"});*/
    	var obj = document.getElementById("name"+i);
    	obj.innerText= object.get('restaurant');
    	var picObj=document.getElementById("pic-select"+i);
    	picObj.src=object.get('pic').url();
        document.getElementById('telephone'+i).innerText=object.get('telephone');
        document.getElementById('worktime'+i).innerText=object.get('worktime');
        document.getElementById('address'+i).innerText=object.get('city')+object.get('county')+object.get('address');
        
        //var tab1Obj=document.getElementById("tab1");
        
        
       // '<img  src="'+object.get('pic').url()+'" class="pic-select"><div class = "category-detail"><h2>'+object.get('restaurant')+'</h2></div>';
/*$(".category-item").append('<div class="category-item">
					<img  id="B" class="pic-select">
					<div class = "category-detail">
						<h2 id="A"></h2>
						<p>不規則形狀的外皮軟嫩又保有口感，每粒肉圓的蝦仁數量，就是擺在外頭的那一個，內餡完全是豬肉餡，不過調味也滿不賴的，好吃！</p>		 
					</div>					
				</div>');
*/

}
},
error: function(error) {
	alert(XX)
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
