/* 1. Ask your user to give you a scale (Celcius or Fahrenheit) and the
tempurature they want to convert. So if they give you 90 Fahrenheit,
they would want you to convert 90 degrees Fahrenheit to whatever that
is in Celcius*/

const h3 = document.querySelector('#temp');
//we're querying the DOM and selecting the h3 from the html page.

let scale = prompt("What's scale (C or F) do you want to use?", "F or C");
let temp = prompt("How hot is it?", "99");

/* 2. Employ a function that accepts those two values as arguments: temperature and
scale (either celcius or fahrenheit) and converts the tempurature they gave you
to the opposite scale.*/

function convertTemp(scale, temp) {
	scale = scale.toLowerCase();
	let returnVal; //style choice. you know you'll have a return value
	let oppositeVal =
		scale === 'c'
			? //if above is true, set oppositeVal to Fahrenheit
			'Fahrenheit'
			: //if above is falsy, set oppositeVal to celcius
			'Celcius';
	temp = parseInt(temp);
	if(!isNaN(temp)){
		returnVal = //set returnVal to either
		scale === 'c' ? //if scale is stricly 'c', then it's true and prints below
			(1.8 * temp) + 32
			: //if scale === 'c' is false, then print the below statement
			(5 / 9) * (temp - 32);

			h3.innerText = `Your temperature is ${returnVal} ${oppositeVal}`;
			//.innerText lets you plug in stuff from js into html
	} else {
		let scale = prompt("What's scale (C or F) do you want to use?", "F or C");
		let temp = prompt("How hot is it?", "99");
		convertTemp(scale, temp);
	}
}

convertTemp(scale, temp);
// need to feed in scale and temp bc that's what we collect from the user

/*From that point on, when the user clicks on the h3, run the function to
convert the temperature back and forth between Celcius and Fahrenheit.*/

h3.addEventListener('click', (e) => {
	let valueArr = e.target.innerText.split(' '); //split converts string to array
	scale =
	valueArr[valueArr.length - 1] === 'Celcius' ? 'C' : 'F';
	//if last index of array is celcius, change to 'C'. if not, change to 'F'
	temp = valueArr[valueArr.length - 2] //second to last index, returnVal
	convertTemp(scale, temp);
});

/*when you click on the h3, it's taking 0 and Celcius and feeding it back
into the function. then it pops out 32 and Fahrenheit. 
*/
