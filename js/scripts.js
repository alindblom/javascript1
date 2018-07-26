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
let emailImput = loginForm.email;
