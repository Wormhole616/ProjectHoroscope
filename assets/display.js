
var horoscope = JSON.parse(localStorage.getItem('sign'));
console.log(horoscope);


var displaysection = document.getElementById('title');
// var titleDisplay = document.getElementById('title');
var nameTitle = document.createElement('h2');
var  strenghtSection = document.getElementById ('strong');
var  attribute = document.createElement('p');
var aboutSection =  document.getElementById ('sign');
var singDescription = document.createElement('p');
var weakSection = document.getElementById ('weaknesses');
var weakness = document.createElement('p');
var loveSection = document.getElementById ('love');
var love = document.createElement('p');
console.log(nameTitle);
singDescription.textContent = horoscope.about;
 aboutSection.appendChild(singDescription);
nameTitle.textContent = "Your sign is " + horoscope.name;
attribute.textContent = horoscope.strengths;
strenghtSection.appendChild(attribute);
displaysection.appendChild(nameTitle);
singDescription.textContent = horoscope.about;
 aboutSection.appendChild(singDescription);
weakness.textContent = horoscope.weaknesses;
weakSection.appendChild(weakness);
love.textContent = horoscope.love;
loveSection.appendChild(love);

