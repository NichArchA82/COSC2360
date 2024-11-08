"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Nicholas Archuletta
      Date:   Nov.11.2024

      Filename: project09-01b.js
*/

let query = location.search.slice(1);
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);

const cardFields = query.split(/&/g);

for (const card of cardFields) {
      const fieldValuePair = card.split(/=/);
      const name = fieldValuePair[0];
      const value = fieldValuePair[1];

      document.getElementById(name).textContent += value;
}