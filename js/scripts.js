let tempScale = prompt(`Select Celcius or Fahrenheit.`.toLowerCase());
let userTemp = parseInt(prompt(`What temperature do you want to convert?`));

function convertTemp(tempScale, userTemp) {
	if(tempScale = "celcius") {
		let fTemp = userTemp * 1.8 + 32;

	} else if(tempScale = "fahrenheit") {
		let cTemp = (userTemp - 32) * .5556;

	} else {
		alert
	}
}
