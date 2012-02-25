$(document).on("ready", arranque);
var startX;
var startY;
function arranque()
{
	var element = document.getElementById("element")
	element.addEventListener("touchstart", onTouchStart);
	element.addEventListener("touchmove", onTouchMove);
	element.addEventListener("touchend", onTouchEnd);
}

function onTouchStart(event)
{
	startX=event.targetTouches[0].pageX ;
	startY=event.targetTouches[0].pageY ;
	$("#trace h6").replaceWith('<h6>Start touch</h6>');
}
function onTouchMove(event)
{
	event.preventDefault();
    var curX = event.targetTouches[0].pageX - startX;
    var curY = event.targetTouches[0].pageY - startY;
    event.targetTouches[0].target.style.webkitTransform =
    'translate(' + curX + 'px, ' + curY + 'px)';
        
}
function onTouchEnd()
{
	$("#trace h6").replaceWith('<h6>Start end</h6>');
}