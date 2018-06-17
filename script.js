var h3 = document.querySelector("h3");
var h2 = document.querySelector("h2");
var body = document.getElementById("gradient");
var button = document.getElementById("generator");


function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ getRandomRgb()
	+ ", "
	+ getRandomRgb()
	+ ")";

	h2.textContent = "Current CSS Background:";
	h3.textContent = body.style.background + ";";
}


function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}



button.addEventListener("click", setGradient)
