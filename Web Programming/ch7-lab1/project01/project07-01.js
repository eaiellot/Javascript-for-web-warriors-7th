"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Ethan Aiello
      Date:   11/7/2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   e.preventDefault();

   //characters A-Z uppercase
   let regex1 = /[A-Z]/;
   //any single digit
   let regex2 = /\d/;
   //symbols that count: !$#%
   let regex3 = /[!\$#%]/ ;
   
   if (pwd.length < 8) { //check length
      feedback.textContent = "Your password must have at least 8 characters.";
   } else if (regex1.test(pwd) === false) { //check uppercase letter
      feedback.textContent = "Your password must include an uppercase letter.";
   } else if (regex2.test(pwd) === false) { //check digit
      feedback.textContent = "Your password must include number.";
   } else if (regex3.test(pwd) === false) { //check symbol
      feedback.textContent = "Your password must include one of the following: !$#%.";
   } else {
      signupForm.submit();
   }


}
);