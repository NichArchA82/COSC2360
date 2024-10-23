"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Nicholas Archuletta
      Date:   Oct.22.2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   const regex1 = /[A-Z]/g;
   const regex2 = /[0-9]/g;
   const regex3 = /[!\$#%]/g;

   e.preventDefault();

   if (pwd.length < 8) {
      feedback.innerText = 'Your password must be at least 8 characters.';
   } else if (!regex1.test(pwd)) {
      feedback.innerText = 'Your password must include an uppercase letter.';
   } else if (!regex2.test(pwd)) {
      feedback.innerText = 'Your password must include a number.';
   } else if (!regex3.test(pwd)) {
      feedback.innerText = 'Your password must include one of the following: !$#%';
   } else {
      signupForm.submit();
   }
});
