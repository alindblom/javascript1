/* LOGICAL OPERATORS
- can be chained together infinite times
-

&& = logical and
- evaluates if both values are true
- as soon as js hits a false statement, it stops executing.

ex:
let bestNumber = 42;
let isTrue = false;

console.log(bestNumber && isTrue); /console logging if both items come back as true
*if any part of the statement comes back as false, the whole statement is false.

|| = logical or
- evaluates if one or the other value is true
- as soon as js hits a true statement, it stops executing.

ex:
let bestNumber = true;
let isTrue = false;

console.log(bestNumber || isTrue); ==> logs true

! = logical not
- checks opposite value of the value you're checking
- ie: console log : not true = false

ex:
let bestNumber = true;
let isTrue = false;

console.log(!isTrue); ==> logs true
*/

let bestNumber = true;
let isTrue = false;

console.log(!isTrue);

/* computers always think in yes or no, true or false, 1 or 0.

TRUTHY AND FALSY
- categories for true and false values in js
- **check MDN links for lists of contents for truthy and falsy

COMPARISON OPERATORS
-

loose equal -> ==
- only checks for value, NOT for type.
ex:
let num = 11;
let string = "11";

console.log(num == string); //logs as true.

strict equal -> ===
- checks if value AND type are the same.
- usually want to only use strict equals in your code
ex:
let num = 11;
let string = "11";

console.log(num === string); //logs as false.

loose equal -> !=
- checks if types are the same, NOT for value

strict equal -> !==
- checks if value is not the same AND type is not the same
ex:
let num = 12;
let string = "11";

console.log(num !== string); //logs as TRUE.

> < <= >= --> greater than, less than, greater than or equal, less than or equal
- only use on numbers or anything that will result in a number

*/

let num = 12;
let string = "11";

console.log(num !== string); //logs as TRUE.

let prim = "I'm a string.";
let objectString = new String("I'm a string.");

console.log(prim == objectString); //should be true -> true
console.log(prim === objectString); //should be false -> false
console.log(prim != objectString); //should be false -> false. they are same in type and value
console.log(prim !== objectString); //true

/* ARITHMETIC OPERATORS: only work on valid numbers
- + (addition) - (subtraction) * (multiply) / (division)
- % (Modulo/Modulus) -> gives remainder when you divide two numbers
	ex: console.log(5 % 2) -> returns 1 bc you have 1 remainder when you divide 5 into 2
- ++ (increment) -- (decrement)
	ex: see below
- NaN (not a number)
	- is an object
	- trying to perform mathematical operation on a non-number (not vice versa)
	- not an error.
*/

//INCREMENT AND DECREMENT
let start = 1;

//...after some logic
start++; //INCREMENT start = start + 1; takes variable and adds 1
console.log(start); //returns 2
start--; //DECREMENT start = start - 1; takes variable and subtracts 1
console.log(start); //returns as 1 because start = 2 from line above, so 2 - 1 = 1

//NaN
let nonNumber = "cheese";

console.log(parseInt(nonNumber)); //returns NaN
// isNaN checks if something is not a number. returns a boolean.
console.log(isNaN(nonNumber)); //checks if something is not a number
console.log(!isNaN(nonNumber)); //checks if something is a number (bc of logical not !)

// parseInt() -> converts string to number
let fifty = "50";
console.log(parseInt(fifty));
//js attempts to change string into a valid number. if it can't, it returns NaN

// .toString() -> converts number to string
let nonString = 50000;
console.log(nonString.toString());
// **method calls (parseInt, .toString) DO NOT reassign value of variable.


/* ASSIGNMENT OPERATORS: single = is for assignments
- += -= *= /=
	-> takes variable on left side of operator and reassigns value
	plus/minus/times/divided by some number
	- if entered in console.log, it still gets reassigned and carries through rest of code
*/

console.log(nonString += 20); //console.log(nonString = nonString + 20);

/*any time js sees a string and a +, it converts both variables into strings
and sticks them together. it doesn't do any math
ie:
	let nonString = "50000"
	console.log(nonString += 20) will return 5000020 and type is String
*/

//IN CLASS PRACTICE
	// let firstNumber = parseInt(prompt("Enter a number.", "10"));
	// let secondNumber = parseInt(prompt("Enter a second number.", "10"));
	//
	// //IF/ELSE EXAMPLE
	// if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
	// 	alert(`Here is your number: ${firstNumber + secondNumber}`);
	// } else if (isNaN(secondNumber)) {
	// 	secondNumber = parseInt(prompt("No, I said a number!", "10"));
	// 	alert(firstNumber + secondNumber);
	// } else {
	// 	alert("No dummie!");
	// }
	//
	// /* CONTROL FLOW: allows program to think for itself (sort of)
	// - if/else is most basic version of control flow
	// 	- can write all in one line if we're only checking one condition (only using if statement)
	// 	- evaluates multiple variables
	// 	- example above ^^
	// - Switch Statements
	// 	- will evaluate every switch statement unlike if/else (which will only find first true statement)
	// 	- evaluates ONE variable
	// 	-can only ever evaluate one condition. can evaluate one condition in multiple possibilities
	// - Ternaries
	// 	- good for simple yes/no or true/false conditions
	// */
	//
	// //SWITCH STATEMENT EXAMPLE
	// let greeting = prompt("Tell me how to say hello.", "Hola!")
	//
	// switch(greeting.toLowerCase()) { //converts greeting input to lowercase. normalizes data
	// 		case 'hello': //if user enters this, the below alert will be the output.
	// 			alert(`I love saying ${greeting}!`);
	// 			break;
	// 		case 'wassup': //can have multiple cases per switch
	// 			alert(`${greeting} is SO 90's!!!!!`);
	// 			break;
	// 		default: //use default last and catches all inputs you didn't account for above.
	// 			alert(`I've never heard ${greeting} before!`);
	// 			break;
	// }
	//
	// //TERNARY OPERATOR EXAMPLE
	// let money = 10;
	// let currency = confirm("In dollars or not?");
	//
	// currency ? alert(`$${money}`) : alert(money);
	// //if true, first alert after the ? will run. if false, skips to alert after :

//IN CLASS PRACTICE

let isAdult = confirm("Are you over 18?");

if(isAdult) {
	let isUnder80 = confirm("Are you under 80 years old?");
	if (isUnder80) {
		let isCool = confirm("Do you like Star Wars?");
		if(!isCool) return; //kills the program
		alert("You're cool!!"); //if isCool is true, this runs after return;
	} else {
		let isOld = confirm("Do you like prunes?");
	}
} else {
	alert("You're too young!");
}
