"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: Nicholas Archuletta
    Date:   Nov.11.2024

    Filename: project10-03.js
*/


function showMap() {
   
   // Page objects
   const userMap = document.getElementById("userMap");
   const saltLakeMap = document.getElementById("saltLakeMap");  
   
   const saltLake = {lat: 40.760717653169465, lng: -111.8899322010854};

   const saltLakeMapObj = new google.maps.Map(saltLakeMap, {
    zoom: 12,
    center: saltLake,
    fullscreenControl: false,
   });
   
   // Get the device’s current position
   navigator.geolocation.getCurrentPosition(getPos, handleError);
   
   function getPos(pos) {
        const myPosition = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
        }

        const userMapObj = new google.maps.Map(userMap, {
            zoom: 12,
            center: myPosition,
            fullscreenControl: false,
        });
   }

   // In case of geolocation error
   function handleError(err) {
        console.log("Geolocation error: " + err.message);
    }   
} 
