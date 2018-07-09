var myString = "Hello World!*76 "; //string: anything in quotes
//how to check what type of thing a variable is
console.log(typeof myString);

var myNumber = 43; //number: any valid number (easy)
console.log(typeof myNumber); //primitie value
var myOtherNumber = new Number(43); //object values

/* Boolean: true or false. how js controls how you want something to happen.
logic gates/control flow (ie: if a is true, execute this code)
NAMING CONVENTION: var is(Name): booleans are typically yes or no, so booleans
should be named is(Action) */

var isLoggedIn = true;

/* Undefined: there is space in memory for this declared "thing",
there's just no definition. not an error. */
console.log(newVariable1, 'BEFORE');
var newVariable1 = "i am a variable";
console.log(newVariable1, 'AFTER');

{
	newVariable1 = "I'm the worst variable."; //assumes that this is a var variable since it wasn't defined
	//this variable becomes a global variable, despite being inside the scope
}

console.log(newVariable1, 'OUTSIDE SCOPE');

// Null: this variable does not exist; absence of value. not an error.

isLoggedIn = null;

// Not Defined: ERROR. means that there's no reference to variable at all.

/* javascript is loosely written, and object based.
everything in js is an object EXCEPT FOR primitive values (data types).
EXAMPLE: var myNumber = 43; -> this is primitive b/c it's the LITERAL value.

** the 5 data types have two forms = object values and primitive values ** */

//STRING interpolation = combining a string with a variable
console.log("Hey there, " + myString + " how are you?"); //ES5
console.log(`Hey there, ${myString} how are you?`); //ES6

{
	/*BLOCK OF CODE: this creates it's own scope, so values defined in this block
	can have a different definition than everything outside of the curly brackets*/
}

/*VARIABLES: 3 different types
var:
- var variables get hoisted.
- var variables are global. (look up for an example newVariable1)
let:
- let variables are not hoisted. only exists when you declare it and after.
- let variables are scoped (only changes inside a scope and not outside)
- let variables can be REDEFINED, but not REDECLARED.
	ex: let newVariable -> DECLARATION
			newVariable = "blah" -> DEFINITION
- EXAMPLE: newVariable2
const:
- const variables are not hoisted.
- const must be declared and defined on the same line.
- const can't be redeclared.
- once you declare and define a const, you don't want to change the value of it.
- also: can't change type of const value (if it's a number, it stays a number).
- in same scope, you can't redefine a const; throws up error in console log.
 */

let newVariable2 = "i am a variable";
console.log(newVariable2, 'AFTER');

{
	let newVariable2 = "I'm the worst variable."; //this variable becomes a global variable, despite being inside the scope
	console.log(newVariable2, 'INSIDE of scope');
}

newVariable2 = "my dog is ugly";
console.log(newVariable2, 'OUTSIDE of scope');

//const example
const age = 32;

{
	const age = 33;
	console.log(age);
}

console.log(age);

/*OBJECTS IN JS
there are predefined objects in js.

- Date
*/

//date object example
let today = new Date();
let myBirthday = new Date('August 26, 1993');
console.log(today);
console.log(myBirthday);

//math object examples
let bestNumber = 42.7;

Math.floor(bestNumber); //rounds number down
Math.ceil(bestNumber); //rounds number up
console.log(Math.floor(bestNumber));
console.log(Math.ceil(bestNumber));

//checking length of a string
let classRoom = "Room 1"; //PRIMITIVE string
let objectClassRoom = new String("Room 1"); //string OBJECT
console.log(typeof classRoom);
console.log(typeof objectClassRoom);
console.log(classRoom.length); //.length refers to value it's connected to
/* **length only works with string objects. js can convert primitives into objects ONLY
when you treat the primitive like an object (like the example above). then after the next line,
the primitive goes back to being a primitive instead of an object. */

// Arrays are good for receiving and sending data.

/* 3 MAIN WAYS TO COMMINICATE WITH YOUR USERS
alert():
- doesn't return a value, just a box with an okay button.
- one way communication from the developer to the user.
confirm():
- box comes up with yes or cancel.
- kicks back a value, and we can capture that value.
prompt():
- presents user with question and returns user's answer.

you call a function. it returns a value.
*/

/*alert("hey there, user! pick a path");
const isReady = confirm("are you ready to rock?");
alert(isReady);*/

let userName = prompt("What's your name?", "John");
console.log(userName);
