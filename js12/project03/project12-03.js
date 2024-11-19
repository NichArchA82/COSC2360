"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Nicholas Archuletta
      Date:   Nov.19.2024

      Filename: project12-03.js
*/

//add a click handler 
$('article > h2').click(e => {
      //store the click event in heading var
      const heading = $(e.target);

      const list = $(heading).next();

      const headingImage = $(heading).children('img');

      $(list).slideToggle(500);

      if ($(headingImage).attr('src') === 'plus.png') {
            $(headingImage).attr('src', 'minus.png')
      } else {
            $(headingImage).attr('src', 'plus.png')
      }
})
