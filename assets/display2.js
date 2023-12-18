
var horoscope2 = JSON.parse(localStorage.getItem('sign2'));
var nameTitle2 = JSON.parse(localStorage.getItem('star2'));

console.log(horoscope2);
console.log(nameTitle2);

// add the name of the sign to the page
var displaysection2 = document.getElementById('display2');
$(displaysection2).append('<h3> SIGN:    ' + nameTitle2 + '</h3>');
var career = horoscope2.career;
$(displaysection2).append('<p> Career: ' + career + '</p>');
console.log(career);
var money = horoscope2.money;
$(displaysection2).append('<p> Money: ' + money + '</p>');
console.log(money);
var love = horoscope2.love;
$(displaysection2).append('<p> Love: ' + love + '</p>');
console.log(love);
var luckyNumber = horoscope2.lucky-number;
$(displaysection2).append('<p> Lucky Number: ' + luckyNumber + '</p>');
console.log(luckyNumber);
