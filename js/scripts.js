let button = document.querySelector("button");
let body = document.querySelector("body");

button.addEventListener(
	"click", (e) => {
		let titlePrompt = prompt("Enter a title for the page!");
		let pageTitle = document.createElement("h1");
		pageTitle.textContent = titlePrompt;
		body.insertBefore(pageTitle, button);
		pageTitle.classList.add("text-center");

		let usersDay = prompt("What did you do today?");
		let pTag = document.createElement("p");
		pTag.textContent = usersDay;
		body.insertBefore(pTag, button);
		pTag.classList.add("text-justify");

		let userColor = prompt("What is your favorite color?");
		
	});
