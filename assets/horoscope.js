
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

