var myString = "Hello World!*76 "; //string: anything in quotes
//how to check what type of thing a variable is
console.log(typeof myString);

var myNumber = 43; //number: any valid number (easy)
console.log(typeof myNumber);

/* Boolean: true or false. how js controls how you want something to happen.
logic gates/control flow (ie: if a is true, execute this code)
NAMING CONVENTION: var is(Name): booleans are typically yes or no, so booleans
should be named is(Action) */

var isLoggedIn = true;

/* Undefined: there is space in memory for this declared "thing",
there's just no definition. not an error. */

var newVariable;
console.log(newVariable);

// Null: this variable does not exist; absence of value. not an error.

isLoggedIn = null;

// Not Defined: ERROR. means that there's no reference to variable at all.
