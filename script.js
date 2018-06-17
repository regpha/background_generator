var h3 = document.querySelector("h3");
var h2 = document.querySelector("h2");
var body = document.getElementById("gradient");
var button = document.getElementById("generator");
var random1 = getRandomRgb();
var random2 = getRandomRgb();

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ random1
	+ ", "
	+ random2
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



button.addEventListener("click", setGradient, )

// color1.addEventListener("input", setGradient);
// Math.floor((Math.random() * 10) + 1)
// color2.addEventListener("input", setGradient);
