Parse.initialize("HAycAB0xf0Lgvp5hzqGzGdN5n80Fz25cvmgcVxUi", "9GdZGVNZV0sngbvQAmWWZv2g81PUfp16cftmXTc7");
objectId = getValue("id")

var Food_CommentObject = Parse.Object.extend("Food_Comment");
var query = new Parse.Query(Food_CommentObject);
query.equalTo("objectId",objectId);
query.find({
	success: function(results) {

		
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
    	var object = results[i];
document.getElementById('title').innerText=object.get('title');
var picObj=document.getElementById("pic-select");
    	picObj.src=object.get('pic').url();
        var obj = document.getElementById("name");
        obj.innerText= object.get('restaurant');
        document.getElementById('telephone').innerText=object.get('telephone');
        document.getElementById('worktime').innerText=object.get('worktime');
        document.getElementById('address').innerText=object.get('city')+object.get('county')+object.get('address');
    	document.getElementById('maintext').innerText=object.get('maintext');
    	
    }
},
error: function(error) {
	
}
});

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