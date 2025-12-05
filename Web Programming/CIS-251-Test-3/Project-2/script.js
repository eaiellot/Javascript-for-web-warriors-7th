/*    JavaScript 6th Edition
 *    Test 3 Project 2

 *    Author: Ethan Aiello
 *    Date:   12/5/2025

 *    Filename: script.js
 */

//ADD CODE BELOW

function populateInfo() {
	if (location.search) {
		var greeting = location.search;
		greeting = greeting.replace("+", " ");
		greeting = greeting.substring(greeting.lastIndexOf("=") + 1);
		document.getElementById("greetingtext").innerHTML = decodeURIComponent(greeting);
	}
}

if (window.addEventListener) {
	window.addEventListener("load", populateInfo, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", populateInfo);
}
