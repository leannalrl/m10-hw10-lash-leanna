// It is always helpful to use comments in your code!
const boilingTemp = () => {
	document.getElementById("boiling-temp").innerHTML = 212;
};

boilingTemp();

const freezingTemp = () =>{
	document.getElementById("freezing-temp").innerHTML = 32;
};

freezingTemp();

const waterTemp = () =>{
	document.getElementById("water-temp").innerHTML = 75;
};

waterTemp();



function myFunction() {
   var element = document.getElementById("boiling");
	 if (waterTemp() > 212){
		 element.className.remove("hide");
	   element.className.add("show");
	 }
}

setTimeout(function(){
	document.getElementById("boiling").innerHTML;
}, 3000);
