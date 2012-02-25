$(document).on("ready", arranque);
var startRotation;
var startScale;
function arranque()
{


var element = document.getElementById("element")

if (window.DeviceMotionEvent != undefined) {
	window.ondevicemotion  = onDeviceMotion;

}
		

}

function onDeviceMotion(event)
{
	var accelerationX = event.accelerationIncludingGravity.x;  
    var accelerationY = event.accelerationIncludingGravity.y;  
    var accelerationZ = event.accelerationIncludingGravity.z;

element.style.webkitTransform ='rotate(' + (accelerationX*28.6478898) + 'deg)';
        $("#trace h6").replaceWith('<h6> x :'+ accelerationX+'</h6>');


}
