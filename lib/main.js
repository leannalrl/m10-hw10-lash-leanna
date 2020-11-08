"use strict";

// It is always helpful to use comments in your code!
var boilingTemp = function boilingTemp() {
	document.getElementById("boiling-temp").innerHTML = 212;
};

boilingTemp();

var freezingTemp = function freezingTemp() {
	document.getElementById("freezing-temp").innerHTML = 32;
};

freezingTemp();

var waterTemp = function waterTemp() {
	document.getElementById("water-temp").innerHTML = 75;
};

waterTemp();

//Another way to create function that we went over in our one on one.

//function myFunction() {
//   var element = document.getElementById("boiling");
//	 if (waterTemp() > 212){
//		 element.classList.remove("hide");
//	   element.classList.add("show");
//	 }
//}

//setTimeout(myFunction, 3000);

var newTemp = 250;

setTimeout(function waterTemps() {
	if (newTemp > 212) {
		document.getElementById("boiling").classList.remove("hide");
		console.log(document.getElementById("boiling").classList);
		document.getElementById("boiling").classList.add("show");
	} else if (newTemp < 32) {
		document.getElementById("frozen").classList.remove("hide");
		console.log(document.getElementById("frozen").classList);
		document.getElementById("frozen").classList.add("show");
	} else {
		document.getElementById("good-temp").classList.remove("hide");
		console.log(document.getElementById("good-temp").classList);
		document.getElementById("good-temp").classList.add("show");
	}
}, 3000);