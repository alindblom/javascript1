/*FUCTIONS
	- has two essential components: input (I) and output (O)
	- give it data and the fucntion can return smth/data.
	- two ways to define a function:
	 	- Anonymous function:
			* unnamed. cannot refer to itself.
		- Named function:
			*
	- logic is you write function definition ONCE and you're able to call the function
		anywhere in your code.
	- okay to have functions that don't take input or give output.
	**step 1: define fuction. step 2: call function.
	- only certain types of functions get HOISTED
		* FUNCTION EXPRESSION -> assigning variable to a function (NOT HOISTED)
		* FUNCTION DECLARATION -> declaring a function (HOISTED)
*/

//ANONYMOUS FUNCTION EXAMPLE
//FUNCTION DEFINITION: nothing will happen until function is called
	// function(string) { //() -> inside parentheses is where your ARGUMENTS/PARAMETERS go. just a placeholder until function is called
	// 	return string.toUpperCase(); //data transformation and return.
	// 	//once js sees return, nothing else after return will be executed
	// 	console.log(string);
	// }; //end of function
// **how to call anonymous function: in a call-back

//NAMED FUNCTION EXAMPLE
//FUNCTION DEFINITION:
function addTwo(num) {
	return num + 2;
};
// with a return statement, it returns a value that can be assigned as a variable.

//CALL the FUNCTION
addTwo(22); /*Call Site:
where the function gets called. this is where argument/parameter is defined.
ex: num is now replaced by 22.*/

//EXAMPLE of INPUT but NO OUTPUT
	// function logMyString(string) {
	// 	console.log(string);
	// };
	// //with no return, it doesn't return a value. it just executes code.
	// logMyString('hewwo!!!!');

//EXAMPLE of NO INPUT OR OUTPUT
	// function alertsAd() {
	// 	alert('Hey, this is an ad!');
	// };
	// //this function doesn't take input and doesn't give an output. once it's called, that's it.
	// alertsAd();

/*
FUNCTION DECLARATION: HOISTED
	function alertsAd() {
	 	alert('Hey, this is an ad!');
	};
FUNCTION EXPRESSION: NOT HOISTED
	let confirmStuff = function(someString) {
		confirm(someString);
	};

/*SCOPING/CLOSURE
	- a function creates a scope, and after that function is done running,
	that code will disappear and not effect the outside scope.
	- **what happens in a function, stays in a function**
	- be aware of where you're using variables and stuff because of scope.
*/

//RECURSIVE FUNCTION: a function that calls itself. they run quickly, but not as fast as a loop
	// let i = 0;
	// function iCallMyself() {
	// 	console.log(i);
	// 	i++;
	// 	if(i < 10) iCallMyself();
	// };
	//
	// iCallMyself();

//FAT ARROW FUNCTIONS: always anonymous functions. need to make them function expression or callback to use them

//BASIC IMPLEMENTATION
(logFunction, alertFunction) => { //NO FUNCTION KEYWORD
	logFunction('hello world');
	alertFunction('goodbye, fiends!');
};
//function is consuming 2 functions, and calling both functions inside of it.

//ONLY 1 ARGUMENT
string => { //parentheses are OPTIONAL if taking only 1 argument
	console.log(string);
}

//funciton expression -> allows fat arrow functions to be named. otherwise, they're always anonymous
let logString = string => {
	console.log(string);
}

logString('hey cats!');

//IMPLICIT RETURN -> used if you have function doing ONLY one thing.
string => (string.toUpperCase());
string => string.toUpperCase();

//TRY IT OUT EXAMPLE
	// let userAge = prompt('What is your age?');
	//
	// function dogAge(userAge) {
	// 	return userAge * 7;
	// };
	//
	// let userDogAge = dogAge(userAge);
	// alert(`Your age in dog years is ${userDogAge}`);

//TRY IT OUT EXAMPLE #2
	// let userAge1 = prompt(`What is your age?`);
	// let maxAge = prompt(`How old will you be when you die?`);
	// let productsUsed = prompt(`How many products do you use per day?`);
	// let lifetimeSupply = (maxAge - userAge1) * (productsUsed * 365);
	//
	// (userAge, maxAge, productsUsed) => {
	// 	return lifetimeSupply;
	// };
	//
	// alert(`Your lifetime supply of products is ${lifetimeSupply}.`);

//SOLUTION
// Accept 2 arguments (age of person now, amount of product per day).

// Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.
// Alert the answer in this format: "You will need x to last you until you're y.
// BONUS: write it to accept a dynamic max age.

	// function calcLifetimeSupply(currentAge, dailyUse, maxUserAge) {
	// 	if(isNaN(currentAge) && isNan(dailyUse) && isNaN(maxUserAge)) {
	// 		alert("Please give me a number!")
	// 		let currentAgeSecondTry = prompt("What's your age?");
	// 		let dailyUseSecondTry = prompt("How many products do you use per day?");
	// 		let maxUserAgeSecondTry = prompt("When will you die?");
	// 	} else {
	// 		if (currentAge < 80) {
	// 			let supply = (maxUserAge - currentAge) * (dailyUse * 365);
	// 			alert(`You will need ${supply} to last until you're ${endOfLife}.`);
	// 		} else {
	// 			alert("Uhhhh, you're dead.");
	// 		}
	// 	}
	// 	alert(`You will need ${supply} to last until you're ${endOfLife}.`)
	// }
	//
	// let age = prompt("how old?")
	// //call functions
	// calcLifetimeSupply(...)

/* METHOD vs. FUNCTION
- not all functions are methods, but all methods are functions.
- method: special kind of function.
- METHOD: called by name. associated with an object. TWO KEY DIFFERENCES:
	* method is implicitly passed the object on which it was called
		ie: console.log() -> console is read by js as an object, and console is automatically
		passed to log
		console -> object .log() -> method
		** the . is a good indicator that you have a method. method consumes object it's attached to.
	* method is able to operate on data that is contained within the class.
*/

//METHODS
console.log() //still pass argument into console.log() -> this is bc js was written so that console.log expects an argument
"cheese".toUpperCase(); //doesn't expect an argument inside (). written in js to consume 0 arguments.
