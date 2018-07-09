let userFirstName = prompt("What is your first name?", "I have no name.");

let userLastName = prompt("What is your last name?", "I still have no name.");
console.log(userLastName);

alert(userLastName);

let userBirthday = new Date(prompt("What is your birthday?", "I don't have one."));
const isBirthday = confirm("Is this your birthday?");
alert(userBirthday);
