// FORMS

/*
 - two ways to access forms:
 	- document.forms[]
		*
	- document.forms.(name attribute on form element in html)
		* look below for example

 - if you put only one button in your form, html assumes that button is the submut button
 - submit button types:
 	* <input type="submit">
	* <button type="submit"></button>

		** if you don't fill out the "action" attribute in a form element with a url,
		the form will send the data to the current url as a query parameter -> url/?stuff
*/

let loginForm = document.forms.login;
let emailInput = loginForm.email;
let passwordInput = loginForm.password;

emailInput.addEventListener("keydown", e => {
	console.log(e.target.value); //.value is what the user is typing in
	console.log(e.keyCode); //what key did they hit?
});

//HOW TO CHECK USER FORM INPUT BEFORE THE FORM GETS SENT TO THE SERVER

loginForm.addEventListener("submit", e=> { //submit event type: ONLY valid for forms
	e.preventDefault(); //how to prevent default action of event (for forms, submitting the form)
	// ..do some checking, submit the form, etc.
	loginForm.reset(); //clears inputs on form after it's submitted
});


/* THIS
- refers to how a function gets called. (call site is where function is actually called.)
- property of a function, and 'this' doesn't get defined until function is called.
- if you want to refer to the context in which a funciton was called, you'll use 'this'.

RULE #1: if you don't do anything at all to change the definition of 'this' in a function,
it will always be the global scope. **
-
*/

// let favorites = ["pickles"];
function listItems (pet) {
	console.log(this);
	alert(`${this.name} loves ${this.favorites[0]} and has a${pet}.`);
};

let user = {
	name: "Andi",
	cart: [],
	coupons: [],
	favorites: ["cheese"],
	listFavorites: listItems //implicintly binds "this"
};

//IMPLICIT "THIS" BINDING
	// user.listFavorites(); //console logs "andi loves cheese"
// use this object as the context to run this function
/* implicitly changed the value of 'this' by setting function (listItems)
as the definition of a variable inside an object. you can only use listFavorites
as a function because you're using it in the context of the object 'user'.

** listFavorites is a METHOD used on user
** if you had a bunch of lists and users, you could use 'this' so that it cuts
down the work you have do instead of defining a function for every single user
** usually used when you import a bunch of data and need to loop over the arrays

** context is USUALLY one back from where the function is being called
-- using dot notation (user.listFavorites), user is where list is defined */

/* CALL STACK
- it's the way the js engine inside your browser handles all the things you're doing in js
- call stack = list of how js engine reads your code after it's compiled

*/

/*EXPLICIT BINDING
- if

- .call() -> must be called on a FUNCTION (ie. listItems must be a function)
          -> first argument you pass into .call() should be the 'this' context
*/

let jr = {
	name: "James Royce",
	cart: ["guns n roses"],
	coupons: [1.99],
	favorites: ["Star Wars"]
};

	// listItems.call(jr, "dog");
// call listItems (function) based on context of jr ('this')
//RULE 2: if function being bound requires arguments, the begin as the SECOND argument of call
// function.call('this', "argument required by function", ...)

// you can have a funciton that has arguments but also needs to be called in the context of an object

// .apply()
	// listItems.apply(jr, ["cat"]);
//all arguments that the function requires are stuck in an array
// ** if you have data that's already in an array, you can use .apply()

/*INLINE CONTEXT: when 'this' is called in html, the context is the element it was called on
(the actual DOM node it's attached to)*/
