/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convert = document.getElementById("convert");

const key = document.getElementById("convertee");
const lengthHolder = document.getElementById("length");
const volumeHolder = document.getElementById("volume");
const massHolder = document.getElementById("mass");

let num = 0;
let num1 = 0;
let num2 = 0;

convert.addEventListener("click", function () {
  if (key.value) {
    convertKey(key.value);
  } else {
    alert("Please Enter valid Number");
  }
});

function convertKey(x) {
  num = parseFloat(x);
  num1 = num * 3.281;
  num2 = num * 0.3048;
  lengthHolder.innerHTML = `${key.value} meters = ${num1} feet <br> ${key.value} feet =  ${num2} meters`;
  num1 = (num * 0.264172).toFixed(2);
  num2 = (num * 3.78541).toFixed(2);
  volumeHolder.innerHTML = `${key.value} liters = ${num1} gallons <br> ${key.value} gallons =  ${num2} liters`;
  num1 = (num * 2.20462).toFixed(2);
  num2 = (num * 0.453592).toFixed(2);
  massHolder.innerHTML = `${key.value} kilos = ${num1} pounds <br> ${key.value} pounds =  ${num2} kilos`;
}
