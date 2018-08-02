/* OBJECTS
- classical inheritance: instead of objects, other programming languages have classes.
class functions similarly to an object (defines name, method, etc). if you mess up in
the code anywhere in the heritance chain, it breaks your whole code.

- prototypal inheritance: uses objects
	-> the children inherit everything the parents has. if you mess up, only the child will
	either break, show undefined, and js keeps reading the code.

*/

	// //PROTOTYPE INHERITANCE
	// let sentence = new String("Ann went walking one day."); //(string type object)
	// let number = new Number(32); //(number type object)
	// // console.log(number);
	//
	// /* _proto_ = prototype. the prototype of string is object.
	// Object.getPrototypeOf ->
	// */
	//
	// let dude = { // most basic way to create an object (object type object)
	// 	catchPhrase: "Where's my car?",
	// 	firstName: "Big",
	// 	lastName: "Lebowski",
	// 	age: Infinity
	// };
	// 	// console.log(Object.getPrototypeOf(dude)); //OBJECT
	//
	// //Objects are made up of KEY : VALUE pair, which makes a PROPERTY

/*CONSTRUCTOR FUNCTIONS
- how to make your own new Number(), new String(), etc
- RULE 1: first letter of constructor function should be capitalized
- RULE 2: arguments that go into function are going to be spit out as property
of that function (?)

1.

you can make your own prototypes. end line of prototype chain is object. */

function User(name, email, password, favorites, cart) {
	this.name = name;
	this.email = email;
	this.password = password;
	this.favorites = favorites;
	this.cart = cart;
}; //4th way to bind 'this'

	// let cody = new User("Cody", "code-man-5000@gmail.com", "123456", [], []);
	// // always have to call new to build new object with these objects
	// // console.log(cody);
	// // console.log(Object.getPrototypeOf(cody));
	// let andi = new User("Andi", "a@gmail.com", "12323", [], []);
	// andi.isAdmin = true;
	// // console.log(andi);
	// use dot notation to add new property = new value

//BRACKET NOTATION: different way to refer to properties on an object
	// andi["42"] = false //bracket notation
	//if you try to add a number to a key, js will reject it. so you can use bracket notation

//TRY IT OUT #1: build a new user with data collected from a form in HTML and your user Prototype

//3 inputs from user, build new user based on those 3 inputs
const userForm = document.forms.userForm;

userForm.addEventListener("submit", e => {
	e.preventDefault();
	alert("stuffs")
	let newUser = new User(userForm.name.value, userForm.email.value, userForm.password.value);
	console.log(newUser);
	userForm.reset();
});
