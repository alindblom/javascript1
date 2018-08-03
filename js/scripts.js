/* JS TIMERS
- TWO TYPES
	- setTimeout();
		* waits a certain amount of time, fires callback function, and is done
		* setTimeout is attached to the window.
		* takes two arguments (function, how many ms you want timeout to wait before firing)
		* bc js is asynchronous, setTimeout() won't fire until after the time runs out, so
		js will read and run other stuff before it even if setTimeout() is read first.
	- clearTimeout();
		* must have reference to callback function creating the timeout to clear the timeout
		itself, not the function that calls the timeout
	- setInterval();
		* fires off every how many seconds
*/
		// let clearBtn = document.querySelector("#clearBtn");
		// let myTimeout;
		// // created variable so that we can store the timeout in it later when we reference it to clear the timeout
		// let annoyingPopup = () => {
		// 	alert("HEY!! DISCOUNTS!!!!!");
		// };
		//
		// // fires after a certain amount of time
		// // setTimeout(
		// // 	() => {alert("hey guys!!!!")},
		// // 	5000
		// // );
		//
		// // if you want timer to start after an event happens (ie button gets clicked)
		// // function startTimer() {
		// // 	setTimeout(
		// // 		() => {alert("hey guys!!!!")
		// // 	},5000);
		// // };
		// function startTimer() {
		// 	myTimeout = setTimeout(annoyingPopup, 5000);
		// };
		//
		// startTimer();
		//
		// function cancelTimer() {
		// 	clearTimeout(myTimeout);
		// };
		//
		// clearBtn.addEventListener("click", cancelTimer);

/* ***need reference to your timeout to clear it. so set it to a variable, then
you can reference to it later down in your code to clear it.

** clearTimeout( setTimeout() needs to be directly passed into clearTimeout to work)
*/

//setInterval() example
	// let myInterval;
	//
	// function remindUser() {
	// 	alert("Balloons are on sale!!!!!");
	// };
	//
	// myInterval = setInterval(remindUser, 3000); //variable is assigned and called at the same time
	//
	// function clear() {
	// 	clearInterval(myInterval);
	// };
	//
	// clearBtn.addEventListener("click", clear);

//TRY IT OUT #1

		// let clearTimeoutBtn = document.querySelector("#clearTimeoutBtn");
		// let clearIntervalBtn = document.querySelector("#clearIntervalBtn");
		// //1.
		// let timeOutAnswer = prompt("How long do you want to wait?", "5 seconds");
		// let intervalAnswer = prompt("How long do you want to wait in between?", "5 seconds");
		// let timeoutReference;
		// let intervalReference;
		// //2.
		// let quotes = ["Be kind.", "Stay humble, hustle hard.", "Shoot first always.", "hehehehehe"];
		// function createTimer(time, type) {
		// 	let endIndex = time.indexOf(" "); //gives first index that's a space in the string
		// 	let parsedTime = parseInt(time.substring(0, endIndex));
		// 	if(!isNaN(parsedTime)) {
		// 		parsedTime *= 1000; //reassigns parsedTime to itself times 1000
		// 		if(type === "timeout") {
		// 			timeoutReference = setTimeout(alertRandomQuote, parsedTime);
		// 		} else if(type === "interval"){
		// 			intervalReference = setInterval(alertRandomQuote, parsedTime);
		// 		}
		// 	} else {
		// 		// ask for numbers again and recall function
		// 	}
		// };
		//
		// function alertRandomQuote() {
		// 	let maxIndex = quotes.length - 1;
		// 	let indexToChoose = Math.floor(Math.random() * maxIndex);
		// 	alert(quotes[indexToChoose]);
		// };
		//
		// createTimer(timeOutAnswer, "timeout");

		// //3.
		//
		// createTimer(intervalAnswer, "interval");
		//
		// //4.
		// clearIntervalBtn.addEventListener("click", () => {
		// 	clearInterval(intervalReference);
		// });
		//
		// clearTimeoutBtn.addEventListener("click", () => {
		// 	clearTimeout(timeoutReference);
		// });

/* STORING VALUES - LOCAL STORAGE
- session storage
	* attached to window
	* expects two arguments: key & value
	*
- local storage
	* same as session storage. just holds data until it's manually cleared out
	sessionStorage.removeItem("key") -> removes key from storage
	sessionStorage.clear() -> removes all saved data from sessionStorage
*/

function storeUserInfo() {
	if(!sessionStorage.getItem("firstName")) {
		let firstName = prompt("What's your first name?");
		sessionStorage.setItem("firstName", firstName);
		// .setItem sets key and value in storage. -> .setItem("key", value)
	}

};

storeUserInfo();

let retrievedValue = sessionStorage.getItem("firstName");
// .getItem grabs from storage -> getItem("key")
alert(`Hello, ${retrievedValue}!`);

//STRICT MODE -> type 'use strict' on line 1 of your code.
