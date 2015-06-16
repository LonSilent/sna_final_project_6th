Parse.initialize("HAycAB0xf0Lgvp5hzqGzGdN5n80Fz25cvmgcVxUi", "9GdZGVNZV0sngbvQAmWWZv2g81PUfp16cftmXTc7");
// var currentUser=Parse.User.current();

function submit(){
var fileUploadControl = $("#profilePhotoFileUpload")[0];
if (fileUploadControl.files.length > 0) {
  var file = fileUploadControl.files[0];
  var name = "photo.jpg";
  var parseFile = new Parse.File(name, file);
}
var restaurantTitle=document.getElementById("title").value;
var restaurantName=document.getElementById("name").value;
var restaurantDate=new Date(document.getElementById("date").value);
var restaurantCity=$("#city option:selected").text();
var restaurantCounty=$("#county option:selected").text();
var restaurantAddress=document.getElementById("address").value;
var restaurantTelephone=document.getElementById("telephone").value;
var restaurantFoodtype=$("#foodtype option:selected").text();
var restaurantFoodtag=document.getElementById("food_tag").value;
var restaurantcost=document.getElementById("cost").value;
var restaurantWorktime=document.getElementById("worktime").value;
var restaurantMaintext=document.getElementById("maintext").value;

var food_CommentObject= Parse.Object.extend("Food_Comment");
var Food_CommentObject= new food_CommentObject();

Food_CommentObject.save({
  title:restaurantTitle,
  restaurant: restaurantName,
  date:restaurantDate,
  city:restaurantCity,
  county:restaurantCounty,
  address:restaurantAddress,
  telephone:restaurantTelephone,
  foodtype:restaurantFoodtype,
  foodtag:restaurantFoodtag,
  cost:restaurantcost,
  worktime:restaurantWorktime,
  maintext:restaurantMaintext
}).then(function(Food_CommentObject) {
	alert(restaurantDate);
});




parseFile.save({pic:name}).then(function() {
	alert("success");
  // The file has been saved to Parse.
}, function(error) {
  // The file either could not be read, or could not be saved to Parse.
});

Food_CommentObject.set("pic", parseFile);

Food_CommentObject.save();
}



function previewImage() {
    var reader = new FileReader();
    var file = document.getElementById("profilePhotoFileUpload").files[0];
    reader.readAsDataURL(file);
    reader.onload = function (oFREvent) {
            document.getElementById("selected-pic").src = oFREvent.target.result;
        };
}
