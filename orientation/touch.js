$(document).on("ready", arranque);
var startRotation;
var startScale;
function arranque()
{

	window.onorientationchange=updateOrientation;
    alert("display orientation");
        
    

}

function updateOrientation()
 {
 	
    var displayStr = "Orientation : ";


    switch(window.orientation)
    {
        case 0:
            displayStr += "Portrait";
        break;

        case -90:
            displayStr += "Landscape (right, screen turned clockwise)";
        break;

        case 90:
            displayStr += "Landscape (left, screen turned counterclockwise)";
        break;

        case 180:
            displayStr += "Portrait (upside-down portrait)";
        break;

    }
	//alert(displayStr);
	 document.getElementById("trace").innerHTML = displayStr;
}