/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Nicholas Archuletta
      Date: Aug.27.2024

      Filename: project02-01.js
 */

function FahrenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
}

function CelsiusToFahrenheit(degree) {
      return degree * 1.8 + 32;
}

document.getElementById('cValue').onchange = function () {
      const cDegree = document.getElementById('cValue').value;
      document.getElementById('fValue').value = CelsiusToFahrenheit(cDegree);
};

document.getElementById('fValue').onchange = function () {
      const fDegree = document.getElementById('fValue').value;
      document.getElementById('cValue').value = FahrenheitToCelsius(fDegree);
};