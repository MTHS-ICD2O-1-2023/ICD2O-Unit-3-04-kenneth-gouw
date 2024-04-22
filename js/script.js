// Copyright (c) 2020 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

function findCelsiusClicked() {
  // Use parseFloat so the user can input a decimal
  const tempInput = parseFloat(document.getElementById("temp-entered").value)
  // Create a variable named "celsius" which calculates the conversion formula and add decimals to the end so the system will use the fraction as a float instead of an integer
  const celsius = (tempInput - 32) * 5.0 / 9.0
  // Output the answer to the user in the class "answer"
  document.getElementById("answer").innerHTML = "If the temperature in fahrenheit is " + tempInput + "<sup>o</sup>F" + ", then the temperature in celsius is " + celsius.toFixed(3) + "<sup>o</sup>C"
}
