		// /* ARRAYS
		// - used for lists of data. like a bucket: you can put other data into an array.
		// 	- data in an array HAS to be one of the 5 data types
		// 	- every value is ALWAYS separated by a comma
		// 	- most data will come to you in the form of an array
		// 	- has access to methods (much like strings do)
		// 	- **Arrays are 0-indexed - each object is represented by a number. the first object is 0, the second object is 1, etc.
		// */
		//
		// //ARRAY FORMAT
		// let myArray = []; //most basic form of an array
		// let favoriteFoods = ["pizza", "ice cream", "pasta"];
		// let allTheThings = ["string", 26, ["stuff"], {}, false];
		//
		// console.log(favoriteFoods[1]); //prints "ice cream"
		// /*when you want to locate a value in an array, you have to write your code
		// based on what INDEX the value is in */
		//
		// // alert(favoriteFoods.length) --> gives you how many members are in the array
		//
		// //TRY IT OUT #1
		// let myFavs = ["thor ragnarok", 26, true, 1993];
		// console.log(myFavs, myFavs.length);
		//
		// /* Arrays are indexed.
		// 	- unknown indices will return as undefined
		//
		// 	METHODS USED WITH ARRAYS
		// 		- isArray -> checks if variable is an array
		// 		- Push -> adds elements to end of array
		// 			** array manipulation: will change original array value on the line and lines after method is used
		// 		- Unshift -> adds elements to beginning of array
		// 		- Pop -> removes last element of array
		// 			** alters array. pops last object and if you don't set it to a variable, it will be deleted forever
		// 		- Shift -> removes first element of array
		// 		- Splice -> changes contents of array by adding and/or removing objects
		// 			** array manipulator. can assign removed objects to a variable so they
		// 			don't get forgotten completely.
		// 		- Slice -> makes a copy of the original index
		// 		** makes a copy of the original and gives you a new thing. DOES NOT change the original.
		// 		- IndexOf -> allows you to find the index of an object you're looking for
		// 			**only gives you first index if the object has multiples
		// 		- LastIndex -> gives you the last index of the object you're looking for
		// 		- Reverse -> reverses the order of your array
		// 			** manipulates original array
		// 		- Sort -> allows you to sort your array.
		// 			** with no arguments, it will sort everything alpha-numerically (looking at first number and first letter)
		// */
		//
		// // isArray example
		// console.log(Array.isArray(myFavs), typeof myFavs);
		//
		// 	// Push example
		// 	console.log(myFavs);
		// 	myFavs.push("Paul Rudd");
		// 	console.log(myFavs);
		//
		// 	//Unshift example
		// 	myFavs.unshift("My parents");
		// 	console.log(myFavs);
		// 	//
		// 	// //Pop example
		// 	// let lastMember = myFavs.pop(); // () are empty because you don't need to tell it what to remove. it just removes the last thing.
		// 	// console.log(lastMember, myFavs); //prints the thing it took away
		// 	//
		// 	// //Shift example
		// 	// let firstMember = myFavs.shift(); //follows same rules as pop
		//
		// //Splice example
		// 	// ** 1 argument: BEGINNING with that index, removes ALL indices including and after that index.
		// 	// ie: as above, we start at index 2 and removed index 2 and all indices after it. */
		// 	// let removed = myFavs.splice(2);
		// 	// console.log(myFavs, removed);
		//
		// // ** 2 arguments -> (1 -> index, 2 -> count) = 1 is the index, 2 is the number of indices to remove
		// 		// console.log(myFavs, 'BEFORE');
		// 		// myFavs.splice(1, 2);
		// 		// console.log(myFavs, 'AFTER');
		//
		// // ** 3 arguments
		// 		// console.log(myFavs);
		// 		// myFavs.splice(3, 1, ["I got added!"]);
		// 		// console.log(myFavs);
		// 		// /* (3, 1, [...]) -> start at 3, remove one thing, and then add one thing at index 3
		// 		// (3 -> index, 1 -> count to remove, [...] -> things to add at index)
		// 		// 	myFavs.splice(3, (myFavs.length - 4), ["i got added."]) -> myFavs.length - 4
		// 		// 	shows you the length of the array and accurately removes the right number of
		// 		// 	objects without trying to remove more things than what's actually in the array
		// 		// 	** myFavs.splice(-2, 1, ["I got added!"]);
		// 		// 		^^ if negative num is 1st argument, it starts at the END of the array and
		// 		// 		counts back to that spot, and removes that index and however many dileniated
		// 		// 		in the count. */
		//
		// //Slice example
		// 	// // No arguments example
		// 	// let copy = myFavs.slice();
		// 	// console.log(copy);
		// 	//
		// 	// // 1 argument
		// 	// let copy1 = myFavs.slice(1); // this gives it an index to start the copy (1 through end of array)
		// 	// console.log(copy1);
		// 	//
		// 	// // 2 arguments
		// 	// let copy2 = myFavs.slice(1, 4); //both numbers are indicies. start at 1st index and make a copy until the 4th index (doesn't include 4th index).
		// 	// console.log(copy2);
		//
		// // IndexOf example
		// 	// let removeIndex = myFavs.indexOf(26); //returns index of 26 in our array
		// 	// console.log(removeIndex);
		// 	// myFavs.splice(removeIndex, 1); //THIS IS USED OFTEN!!!
		//
		// //Reverse example
		// 	let myNums = [1, 2, 3, 4, 5];
		// 	console.log(myNums.reverse());
		//
		// 	//Sort example
		// 	console.log(myFavs);
		// 	myFavs.sort();
		// 	console.log(myFavs);
		//
		// 	// NESTED ARRAYS
		//
		// 	let multiDimensional = [['hello', 1], ['goodbye', 0]];
		//
		// 	console.log(multiDimensional[0][0], multiDimensional[1][0]);
		// 	// the first [] is the parent array, the second [] is the arrays inside the parent, etc...
		//
		// 	//TRY IT OUT #2
		// 	//1.
		// 	let firstMovie = ['Ant-Man', 'Scott Lang'];
		// 	let secondMovie = ['Birdcage', 'Armond'];
		// 	let thirdMovie = ['Atlantis', 'Milo'];
		// 	let fourthMovie = ['Captain America: Winter Soldier', 'Steve Rogers'];
		// 	let fifthMovie = ['Thor Ragnarok', 'Thor'];
		// 	let faveMovies = [];
		//
		// 	faveMovies.push(firstMovie, secondMovie, thirdMovie, fourthMovie, fifthMovie);
		// 	console.log(faveMovies);
		// 	//2.
		// 	let movieTitles = [];
		// 	movieTitles.push(faveMovies[0][0], faveMovies[1][0], faveMovies[2][0], faveMovies[3][0], faveMovies[4][0]);
		// 	alert(movieTitles);
		// 	//3.
		// 	let favAndLeast = [];
		// 	favAndLeast.push(faveMovies[0], faveMovies[1]);
		// 	console.log(favAndLeast);
		// 	//4.
		// 	alert(faveMovies.length);

// LOOPS
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});
