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
    if (isNaN(key.value)) {
      alert("Please Enter valid Number");
    } else {
      convertKey(key.value);
    }
  } else {
    alert("Please Enter valid Number");
  }
});

function convertKey(x) {
  num = parseFloat(x);
  num1 = (num * 3.281).toFixed(3);
  num2 = (num * 0.3048).toFixed(3);
  lengthHolder.innerHTML = `${key.value} Meters = ${num1} Feet <br> ${key.value} Feet =  ${num2} Meters`;
  num1 = (num * 0.264172).toFixed(3);
  num2 = (num * 3.78541).toFixed(3);
  volumeHolder.innerHTML = `${key.value} Liters = ${num1} Gallons <br> ${key.value} Gallons =  ${num2} Liters`;
  num1 = (num * 2.20462).toFixed(3);
  num2 = (num * 0.453592).toFixed(3);
  massHolder.innerHTML = `${key.value} Kilos = ${num1} Pounds <br> ${key.value} Pounds =  ${num2} Kilos`;
}
