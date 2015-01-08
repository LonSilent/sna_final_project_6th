Parse.initialize("HAycAB0xf0Lgvp5hzqGzGdN5n80Fz25cvmgcVxUi", "9GdZGVNZV0sngbvQAmWWZv2g81PUfp16cftmXTc7");
function submit(){
var fileUploadControl = $("#profilePhotoFileUpload")[0];
if (fileUploadControl.files.length > 0) {
  var file = fileUploadControl.files[0];
  var name = "photo.jpg";
  var parseFile = new Parse.File(name, file);
}

var restaurantName=document.getElementById("name").value;
var food_CommentObject= Parse.Object.extend("Food_Comment");
var Food_CommentObject= new food_CommentObject();
Food_CommentObject.save({restaurant: restaurantName}).then(function(object) {
	//alert(restaurantName);
});


parseFile.save({pic:name}).then(function() {
	alert(name);
  // The file has been saved to Parse.
}, function(error) {
  // The file either could not be read, or could not be saved to Parse.
});

Food_CommentObject.set("pic", parseFile);
Food_CommentObject.save();
}


function loadImage(e) {
    var image = new Image();
    image.src = e.target.result;
}
function previewImage() {
    var reader = new FileReader();
    var file = document.getElementById("profilePhotoFileUpload").files[0];
    reader.readAsDataURL(file);
    reader.onload = loadImage;
}
$('#profilePhotoFileUpload').change(previewImage);