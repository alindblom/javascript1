let userName = prompt("What is your name?", "John");
let faveColor = prompt("Pick your favorite color from this list: red, orange, yellow, green, blue, purple, pink, gray, white, black");

switch(faveColor.toLowerCase()) {
		case 'red':
			alert(`They say ${faveColor} is the color of passion, ${userName}.`);
			break;
		case 'orange':
			alert(`Doesn't ${faveColor} remind you of autumn, ${userName}?`);
			break;
		case 'yellow':
			alert(`${userName}, you can't help but smile when you think of ${faveColor}, huh?`);
			break;
		case 'green':
			alert(`Did you know about ${faveColor}'s healing properties, ${userName}?`);
			break;
		case 'blue':
			alert(`A ${faveColor} ocean is a good ocean, ${userName}.`);
			break;
		case 'purple':
			alert(`Velvet suits look best in ${faveColor}, ${userName}.`);
			break;
		case 'pink':
			alert(`You know what they say, ${userName}: ${faveColor} don't stink!`);
			break;
		case 'gray':
		case 'grey':
			alert(`A gloomy day always has ${faveColor} skies, ${userName}.`);
			break;
		case 'white':
			alert(`${userName}, ${faveColor} is good for a blank canvas.`);
			break;
		case 'black':
			alert(`The stars shine brightest in a ${faveColor} night sky, ${userName}.`);
			break;
		default:
			alert(`You need to pick one of those colors, ${userName}!`);
			break;
}
