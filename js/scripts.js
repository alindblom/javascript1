/* WHAT IS THE DOM
- Document Object Model
	-> virtual space in browser HTML/CSS, JS, XML, JSON, etc. converge.
 	-> entire document where your browser lives?
	-> DOM is an API
- API
	-> program waiting for requests, and when you ask for data in the correct format,
	it gives you back what you asked for .

	- document.all -> made query to DOM saying "give me all of the objects in the document"
	- dom nodes -> objects that have properties in them (html -> elements, js -> dom nodes). can be manipulated.

	- window.alert() -> window is the object & .alert() is the method [same as alert()].
*/

/*METHODS FOR QUERYING DOM
- document.
	-> the DOM in js words

THREE ORIGINAL METHODS:
- .getElementsByTagName();
	-> ALWAYS pass in a string
	-> searches for all tags you're looking for and gives you an array
	-> can assign it to a variable to actually access the tag you're looking for
- .getElementsByClassName();
	-> pass in string.
	-> searches for tags with that CLASS and gives them to you in an array
- .getElementById();
	- id's are ONLY used for javascript to manipulate html.
	- can have thousands of id's, but each id should only be used once in the document.
	- this query only gives you the FIRST id you're searching for -> hence why each id needs to be unique.

TWO NEWER METHODS
- querySelector
	-> only gives you first element you're looking for.
	-> can search by tag, class, or id
- querySelectorAll
	-> gives you ALL instances of the element you're looking for.
	-> same rules as querySelector
*/

//.getElementsByTagName() example
const bodyTag = document.getElementsByTagName("body");
console.log(bodyTag[0]);

//.getElementsByClassName() example
const header = document.getElementsByClassName("heading");

//.getElementById example
const paragraph = document.getElementById("paragraph1");
console.log(paragraph);

// querySelector() example
	// let div = document.querySelector("div"); //selecting by tag
	// let div = document.querySelector(".div-class"); //selecting by class
	let div = document.querySelector("#div_id"); //selecting by id

// querySelectorAll() example
	// let divs = document.querySelectorAll("");

/* LISTENING FOR EVENTS (EVENT LISTENERS)
- Event Listeners -> are for interacting with your user.
- event -> something happening to the DOM.
- event listeners take two arguments:
	1. string name of event you're listening for.
	2. the function you want to run once the event becomes true (when you 'hear' the event, you do smth)
		whatever you write in the function is what you want to happen.
		** any time you have an anonymous function, write it in fat arrow function
- need to pass in an argument to gain access to the event in js
	ie: why we named it ev instead of () below so we can view in console console log

*/

// div.addEventListener(
// 	"mouseover",
// 	// function(ev) {
// 	// 	div.style.backgroundColor = "#e40007";
// 	// } --> ES5 way to write callback
// 	ev => { //ES6 way to write callback
// 		console.log(ev);
// 		div.style.backgroundColor = "#e40007";
// 	}
// );
// div.addEventListener(
// 	"mouseleave",
// 	ev => {
// 		console.log(ev);
// 		div.style.backgroundColor = "#388422";
// 	}
// );

button_1.addEventListener(
	"click",
	ev => {
		console.log(ev);
		alert(`Hey, you clicked on me!`);
	}
);

div_1.addEventListener(
	"mouseover",
	ev => {
		console.log(ev);
		div_1.style.backgroundColor = "#777777";
	}
);

h1_1.addEventListener(
	"keyup",
	ev => {
		console.log(ev);
		h1_1.style.color = "#9837ab";
	}
);
