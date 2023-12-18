

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
console.log(horoscope2);


var displaysection2 = document.getElementById('display2');
var nameTitle2 = document.createElement('h1');
console.log(nameTitle2);
nameTitle2.textContent = horoscope2.name;
displaysection2.appendChild(nameTitle2);
var aboutSection2 =  document.getElementById ('sign2');
var singDescription2 = document.createElement('p');
singDescription2.textContent = horoscope2.about;
 aboutSection2.appendChild(singDescription2); 




// // career
// data[0].career
// // love
// data[0].love
// // lucky number
// data[0].lucky_number
// // lucky color
// data[0].lucky_color



 
 