<<<<<<< Updated upstream

var dob = document.getElementById('#button').value();
const url = 'https://horoscope-astrology.p.rapidapi.com/horoscope?day=year&sunsign=libra';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a3fb7ab1dmsh8f51104df95307dp1cbe8djsn66a0bd8e31df',
		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
	}
};



function getApi() {
    fetch (url, options) 
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        console.log(data );
    })

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

getApi();
=======
// // Define the API URL
// const authString = btoa("7f88606d-c79d-422b-a358-9d9896a63cb4:59fcada79e1e26ba088c1a0cb7846f9eb88d9db6850eeb7bde662fdda941d5909f56df4682e6eb9ca0adbca65f153cc4038c44f7a5b6272c6eb1eb2c1e73954696f6b716a9f67badb014ae7e56f81d778a42f7d36fd969f9a5dd647b08d4fb2d9e5f162d4ae056fc2f0dbf9a261a196f");
// let apiKey= "7f88606d-c79d-422b-a358-9d9896a63cb4";
// let apiSecret = "59fcada79e1e26ba088c1a0cb7846f9eb88d9db6850eeb7bde662fdda941d5909f56df4682e6eb9ca0adbca65f153cc4038c44f7a5b6272c6eb1eb2c1e73954696f6b716a9f67badb014ae7e56f81d778a42f7d36fd969f9a5dd647b08d4fb2d9e5f162d4ae056fc2f0dbf9a261a196f";
// let apiUrl = 'https://www.myapp.com';

// Select the element you want to add an event listener to
// const myButton = document.getElementById('myButton');
>>>>>>> Stashed changes

