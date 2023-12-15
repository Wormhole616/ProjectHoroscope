console.log("hello");

var horoscope = JSON.parse(localStorage.getItem('sign'));
console.log(horoscope);


var displaysection = document.getElementById('display');
var nameTitle = document.createElement('h1');
console.log(nameTitle);
nameTitle.textContent = horoscope.name;
displaysection.appendChild(nameTitle);