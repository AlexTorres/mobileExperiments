$(document).on("ready", arranque);
var startRotation;
var startScale;
function arranque()
{
	var element = document.getElementById("element")
	element.addEventListener("gesturestart", onGestureStart, false);
	element.addEventListener("gesturechange", onGestureChange, false);
	element.addEventListener("gestureend", onGestureEnd, false);
	
}

function onGestureStart(event)
{
	event.preventDefault();
	startRotation=event.rotation;
	startScale=event.scale;
	$("#trace h6").replaceWith('<h6>Start touch</h6>');

}
function onGestureChange(event)
{
	event.preventDefault();
 	event.target.style.webkitTransform =
 	'scale(' + event.scale  + startScale  + ') rotate(' + event.rotation + startRotation + 'deg)';
}
function onGestureEnd()
{

	$("#trace h6").replaceWith('<h6>Start end</h6>');
}