Parse.initialize("HAycAB0xf0Lgvp5hzqGzGdN5n80Fz25cvmgcVxUi", "9GdZGVNZV0sngbvQAmWWZv2g81PUfp16cftmXTc7");


var Food_CommentObject = Parse.Object.extend("Food_Comment");
var query = new Parse.Query(Food_CommentObject);
query.equalTo("foodtype","美式料理");
query.find({
	success: function(results) {

		
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
    	var object = results[i];
document.getElementById('title'+i).innerText=object.get('title');
var picObj=document.getElementById("pic-select"+i);
    	picObj.src=object.get('pic').url();
    	document.getElementById('maintext'+i).innerText=object.get('maintext');
    	
    }
},
error: function(error) {
	
}
});