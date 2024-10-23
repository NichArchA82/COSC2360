"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Nicholas Archuletta
      Date:   Oct.22.2024

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

addButton.addEventListener('click', function() {
   customers.push(customerName.value);
   generateCustomerList();
   status.innerText = `${customerName.value} added to the end of the queue`
});

searchButton.addEventListener('click', function() {
   const place = customers.indexOf(customerName.value) + 1;

   if (place === 0) {
      status.innerText = `${customerName.value} is not found in the queue`;
   } else {
      status.innerText = `${customerName.value} found in position ${place} of the queue`;
   }
});

removeButton.addEventListener('click', function() {
   const index = customers.indexOf(customerName.value);

   if (index !== -1) {
      customers.splice(index);
      status.innerText = `${customerName.value} removed from the queue`;
      generateCustomerList();
   } else {
      status.innerText = `${customerName.value} is not found in the queue`;
   }
});

topButton.addEventListener('click', function(){
   const topCustomer = customers.shift();
   status.innerText = `${topCustomer} from the queue`;
   generateCustomerList();
});
