

var horoscope = JSON.parse(localStorage.getItem('sign'));
console.log(horoscope);


var displaysection = document.getElementById('display');
var nameTitle = document.createElement('h1');
console.log(nameTitle);
nameTitle.textContent = horoscope.name;
displaysection.appendChild(nameTitle);
var aboutSection =  document.getElementById ('sign');
var singDescription = document.createElement('p');
singDescription.textContent = horoscope.about;
 aboutSection.appendChild(singDescription);





var horoscope2 = JSON.parse(localStorage.getItem('sign2'));
var nameTitle2 = JSON.parse(localStorage.getItem('star2'));

console.log(horoscope2);
console.log(nameTitle2);

// add the name of the sign to the page
var displaysection2 = document.getElementById('display2');
$(displaysection2).append(nameTitle2);







 
 