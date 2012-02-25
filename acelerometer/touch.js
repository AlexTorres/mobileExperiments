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

element.style.webkitTransform ='rotate(' + accelerationX*28 + 'deg)';
       
        document.getElementById("alpha").innerHTML ='alpha' +Math.round(event.rotationRate.alpha) ;
        document.getElementById("beta").innerHTML = 'beta' + Math.round(event.rotationRate.beta);
        document.getElementById("gamma").innerHTML = 'gamma' + Math.round(event.rotationRate.gamma);


}
