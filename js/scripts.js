/* JSON
- javascript object notation
- NOT JAVASCRIPT
- JSON.parse() -> turns raw JSON data into data we can deal with.
- JSON.stringify() -> turns data into a string (so we can read it!)
- JSON object =/= javascript object
- to use JSON objects received from server, you have to convert it into javascript */

	// let myObject = {
	// 	name: "Andi",
	// 	age: NaN
	// };
	//
	// myObject = JSON.stringify(myObject);
	// console.log(myObject);
	// // console.logs -> {"name":"Andi","age":null}
	//
	// //check out cloned repo for JSON examples ->
	//
	// /*PROMISES
	// - way to send and received information/data asynchronously
	// - takes in two METHODS (not arguments) {resolve, reject}
	// 	* if things are good (good response) -> use resolve
	// 	* if there's an error (bad response) -> use reject
	// - you can plan on what the error is and take appropriate action.
	// - promise will return a promise
	// */
	//
	// // define promise
	// const weCool = false;
	// const myPromise = new Promise( (resolve, reject) => {
	// 	if (weCool) resolve('We are in fact, cool.');
	// 	else if(!weCool) reject('Sorry, we aint cool...');
	// });
	// //checking to see if value of weCool resolves to be true.
	// //if weCool is false -> use reject
	//
	// // consume promise -> can't call it like a function bc it's not a function
	// myPromise.then(result => {
	// 	console.log(result);
	// }).catch(error => {
	// 	console.log(error);
	// });
	// // use .then(result => {}) to catch resolve part of a promise
	// //when false, console log -> Uncaught (in promise) Sorry, we aint cool...
	// //this is bc result ONLY takes in resolve result
	// //so bc of this, use .catch(error => {}) for the reject part of a promise
	//
	// //function that returns 2
	// function returnTwo() {
	// 	return 2;
	// }
	// //if you put it into a promise, it will return a promise (check console log)
	// console.log(Promise.resolve(returnTwo()));

//FETCH API
/*
- new to ES6
- request -> stuff you send out
- response -> stuff you pull in

*/

//GET REQUEST -> only getting data from server, not sending anything back
let starTrekSeries;

//this returns a promise -> so use .then()
fetch('http://stapi.co/api/v1/rest/series/search').then( response => {
	// console.log(response);
	if(response.ok){ //looking at status object of response object {
		console.log("yay!");
	}
	return response.json(); //returning response, turned it into json format, pass into .then()
}).then(jsonResult => {
	console.log(jsonResult.series);
	starTrekSeries = jsonResult.series; //got array series from api and assigned it to variable
}).catch( (err) => { console.log(err); }); //to catch errors and be SMART ABOUT IT
//console.logs response object
// status -> 3 digit status code (ie. 200 is a good code :) )
// ok -> if anything comes back worthy of an error, ok is FALSE (good catch all for errors)
// series -> databases way of holding data
// **this allows you to take in data and do smth with it (like to put it on the screen)**

//POST REQUEST -> sending data back to server for server to process
/*
mode: 'cors' -> cross origin request (?)
headers: {
	'Content-Type': 'application/json' -> the type of data we're sending to server
}
body: {
	number: 555,
	faveColor: blue -> body is the actual data that you're sending
}

use .then since you're sending a promise
*/

//POSTMAN -> app to download

//CLOSURE -> look it up

//ES6 Classes
// - special function -> does NOT get hoisted
// - contains special method named constructor - inherently there if it's not written out
// - can be extended to be declared as a child of a class
// - classes return an object
// class and prototype can be interchangable

// syntactic sugar
//@Component -> @ is a decorator that Angular adds for you
