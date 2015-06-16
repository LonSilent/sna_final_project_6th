foodtype = getValue("foodtype")
// console.log(foodtype)
switch(foodtype){
  case 'italian':
  type = "義式料理";
  break;
}
function getValue(varname)
{
  var url = window.location.href;
  var qparts = url.split("?");
  if (qparts.length == 0){return "";}
  var query = qparts[1];
  var vars = query.split("&amp;");
  var value = "";
  for (i=0; i<vars.length; i++)
  {
    var parts = vars[i].split("=");
    if (parts[0] == varname)
    {
      value = parts[1];
      break;
    }
  }
  value = unescape(value);
  value.replace(/\+/g," ");
  return value;
}

Parse.initialize("HAycAB0xf0Lgvp5hzqGzGdN5n80Fz25cvmgcVxUi", "9GdZGVNZV0sngbvQAmWWZv2g81PUfp16cftmXTc7");



var Food_CommentObject = Parse.Object.extend("Food_Comment");
var query = new Parse.Query(Food_CommentObject);
query.equalTo("foodtype",type);
query.find({
  success: function(results) {
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
     var object = results[i];
     // document.getElementById('title'+i).innerText=object.get('title');
     // var picObj=document.getElementById("pic-select"+i);
     // picObj.src=object.get('pic').url();
     // document.getElementById('maintext'+i).innerText=object.get('maintext');
     $('<div class="category-item"><a href="objectpage.html" title="Link"><img src="'+object.get('pic').url()+'" id="pic-select"></a>      <div class = "category-detail"><h2><a href="objectpage.html" title="Link">'+object.get('title')+'</a></h2><p>'+object.get('maintext')+'</p>            </div></div>').appendTo('#tab1');
  console.log(foodtype)

   }
 },
 error: function(error) {

 }
});
