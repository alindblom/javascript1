	// //DOM MANIPULATION
	// const div = document.querySelector(".myDiv");
	//
	// /* .textContent -> html DOM node. gives you all TEXT (only) content from ALL
	// children.
	// 	- advantage over innerHTML bc browser doesn't have to parse html
	// 	- can set text as well */
	// console.log(div.textContent);
	//
	// // div.textContent = "Say cheese and die!!" //Reset value of text inside an element
	//
	// /* .innerHTML -> includes tags and text of all children.
	// 	- returns all contents of the element including comments
	// 	- don't want to use innerHTML for user input!! */
	// console.log(div.innerHTML);
	//
	// //can use innerHTML to add stuff to your own code. used to build your own DOM.
	// // div.innerHTML = "<h1>Hey there, R.L. Stein.</h1>";
	//
	// //CREATING ELEMENTS STRAIGHT OUT OF JS
	//
	// /* .createElement()
	// 	- used to create a DOM element
	// */
	//
	// // just making an h1 in js, but not actually adding it to the DOM
	// let newH1 = document.createElement("h1");
	// newH1.textContent = "hey hey hey hey hey hey hey hey h1";
	//
	//
	// /* .appendChild()
	// 	- used to add html elements to the DOM
	// 	- have to use appendChild on a parent tag (which becomes the object)
	// 	- will always add this child to the END of the parent */
	// div.appendChild(newH1);
	// //div -> object | .appendChild() -> method | newH1 -> child object (what we're putting in the div)
	//
	// /* .insertBefore()
	// 	- takes two arguments: the new node you're inserting and the child node that
	// 	you're inserting before
	// 	- nodes you use in insertBefore have to exist on the DOM.
	// 	- always have to start with parent node */
	//
	// // ex: inserting h2 in between two elements
	// let newH2 = document.createElement("h2");
	// newH2.textContent = "wow wow wow wow wow wow h2";
	// div.insertBefore(newH2, newH1);
	// /* newH2 is node we're inserting into DOM, newH1 is node that we're putting newH2 before
	// so in HTML, it will go div -> newH2 above newH1*/
	//
	// //ADDING ATTRIUBUTES TO ANY ELEMENT
	//
	// /* dot notation
	// 	- object name . (DOT) method
	// */
	// // .id
	//
	// newH1.id = "red_bg"; //sets an id explicitly (reassigns it)
	// // this is an easy way to add an ID to smth that doesn't have an ID
	//
	// // .className -> will replace current class on a node
	// newH2.className = "blue-bg";
	// newH2.className += " white-text"; //workaround to add additional classes
	//
	// /* .classList -> easy way to chain things together. method that you can chain to smth else.
	//  - classList is an additional object attached to your parent element
	//  - able to be chained (chaining)
	//  		- classList.add() -> adds classes to your element. doesn't replace classes that are already there.
	// */
	//
	// let newP = document.createElement("p");
	// newP.textContent = "meow meow meow";
	// newP.classList.add("purple-text", "green-bg"); //has to be comma separated strings
	// div.appendChild(newP);
	//
	// /* .classList.remove()
	// 	- allows you to remove a class from an element
	// */
	// let span = document.querySelector("span");
	// span.addEventListener("mouseenter", (e) => {
	// 	span.classList.remove("white-text");
	// })
	//
	// /* .classList.toggle()
	// 		- allows you to turn a class on and off
	// 	.classList.replace()
	// 		- allows you to replace a class that's already there, and replace it
	// 	.classList.contains()
	// 		- returns boolean
	// 		- you can use this with a ternary to change out the class instead of using toggle.
	// */
	//
	// span.addEventListener("click", (e) => {
	// 	span.classList.toggle("giant-text");
	// 	span.classList.contains("green-bg") ? //evaluate this and check if true or false
	// 	span.classList.replace("green-bg", "blue-bg")
	// 	:
	// 	span.classList.replace("blue-bg", "green-bg")
	// });
	//
	// /* .setAttribute()
	// 		- changes an attribute for an element
	// 		- ("this is the element you want to change", this is what you're replacing it with)
	// */
	//
	// const dogs = "http://pngimg.com/uploads/dog/dog_PNG50361.png";
	// let image = document.querySelector("img");
	//
	// image.addEventListener("click", (e) => {
	// 	image.setAttribute("src", dogs);
	// })

// FIZZBUZZ
let body = document.querySelector("body");
let script = document.querySelector("script");

for(i = 1; i <= 100; i++){
	let newP = document.createElement("p");
	if(i % 3 === 0 && i % 5 === 0) { //run both conditions first. checks if i is strictly divisible by 3 and 5
		newP.textContent = "FizzBuzz";
	} else if (i % 3 === 0) {
		newP.textContent = "Fizz";
	} else if (i % 5 === 0) {
		newP.textContent = "Buzz";
	} else {
		newP.textContent = i;
	}
	body.insertBefore(newP, script);
}
