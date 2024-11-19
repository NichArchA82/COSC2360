"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Nicholas Archuletta
      Date:   Nov.19.2024

      Filename: project12-01.js
*/

$( () => {
      //function that runs after page has loaded

      //show the submenu on mouseover
      $('li.submenu').mouseover( e => {
            $(e.currentTarget).children("ul").show();
      //hide the submenu on mouseout
      }).mouseout( e => {
            $(e.currentTarget).children("ul").hide();
      })
})
