"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-05

      Project to submit a registration form
      Author: Nicholas Archuletta
      Date:   Oct.15.2024

      Filename: project06-05.js
*/

window.addEventListener("load", function() {
   // Calculate the shopping cart when the page loads
   calcCart();
   
   // Verify that the user has selected a session to attend
   document.getElementById("regSubmit").onclick = sessionTest;   
   
   // Recalculate the shopping chart when any field loses the focus
   document.getElementById("fnBox").blur = calcCart;
   document.getElementById("lnBox").blur = calcCart; 
   document.getElementById("groupBox").blur = calcCart;   
   document.getElementById("mailBox").blur = calcCart;   
   document.getElementById("phoneBox").blur = calcCart;   
   document.getElementById("sessionBox").onchange = calcCart;   
   document.getElementById("banquetBox").blur = calcCart; 
   document.getElementById("mediaCB").onclick = calcCart;   
});


// Function to verify that a session was selected by the user
function sessionTest() {
   var confSession = document.getElementById("sessionBox");
   if (confSession.selectedIndex === -1) {
      confSession.setCustomValidity("Select a Session Package");
   } else {
      confSession.setCustomValidity("");
   }
}

// Function to calculate the shopping cart total
function calcCart() {
   
   // Calculate the banquet cost for all guests 
   let guestCost = document.forms.register.elements.banquetGuests.value*55;
   document.getElementById("regBanquet").textContent = document.forms.register.elements.banquetGuests.value;
   
   // Determine the cost of the selected session
   let sessionCost = 0;       // Initial cost of the session
   let sessionChoice = "";    // Initial chosen session

   // Index of the chosen session
   let selectedSession = document.forms.register.elements.sessionBox.selectedIndex;
   
   // Retrieve the name and cost of the selected session  
   if (selectedSession !== -1) {
      sessionChoice = document.forms.register.elements.sessionBox.options[selectedSession].text;
      sessionCost = document.forms.register.elements.sessionBox.options[selectedSession].value;
   }
   
   // Determine the cost of the media pack
   let mediaCost = 0;      // Initial media cost
   let mediaChoice = "";   // Initial media choice
   
   // If the user selects the media pack, update the choice and cost
   if (document.forms.register.elements.mediaCB.checked) {
      mediaChoice = "yes";
      mediaCost = 115;
   }
   
   // Calculate total cost of the conference
   // Multiply field values by 1 to convert them from text strings to numeric values
   let totalCost = guestCost*1 + sessionCost*1 + mediaCost*1;
   
   // Display the field values and calculated values in the Shopping Cart table
   document.getElementById("regName").textContent = document.forms.register.elements.firstName.value + " " + document.forms.register.elements.lastName.value;
   document.getElementById("regGroup").textContent = document.forms.register.elements.group.value;
   document.getElementById("regEmail").textContent = document.forms.register.elements.email.value;
   document.getElementById("regPhone").textContent = document.forms.register.elements.phoneNumber.value;
   document.getElementById("regSession").textContent = sessionChoice;
   document.getElementById("regBanquet").textContent = document.forms.register.elements.banquetGuests.value; 
   document.getElementById("regPack").textContent = mediaChoice;
   document.getElementById("regTotal").textContent = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
}
