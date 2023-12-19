

var horoscope = JSON.parse(localStorage.getItem('sign'));
console.log(horoscope);


var displaysection = document.getElementById('display');
var nameTitle = document.createElement('h1');
console.log(nameTitle);
nameTitle.textContent = horoscope.name;
displaysection.appendChild(nameTitle);
var aboutSection = document.getElementById('sign');
var singDescription = document.createElement('p');
singDescription.textContent = horoscope.about;
aboutSection.appendChild(singDescription);







