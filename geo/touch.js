$(document).on("ready", arranque);
var startRotation;
var startScale;
function arranque()
{


var element = document.getElementById("element")


		 navigator.geolocation.getCurrentPosition(showMap);

}

 function showMap(position) 
 {
      // Show a map centered at position
       	var latitude = position.coords.latitude;
    	var longitude = position.coords.longitude;
    	document.getElementById("lat").innerHTML = 'latitude= ' + latitude;
    	document.getElementById("long").innerHTML = 'longitude= ' + longitude;
  }