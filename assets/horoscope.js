
var sign = document.getElementById('#button');
var date = sign.getDate();
console.log(date);

var dates = ["03/21 - 04/19", "04/20 - May 20", "May 21 - June 20", "June 21 - July 22", "July 23 - August 22", "August 23 - September 22", "September 23 - October 22", "October 23 - November 21", "November 22 - December 21", "December 22 - January 19", "January 20 - February 18", "February 19 - March 20" ];

var signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio","sagittarius", "capricorn", "aquarius", "pisces"];

// var userSign = getSign();
// function getSign() {

//     if (sign > '03/21' < '04/19') {
//         console.log('aries');
//         return 'aries';
//     }
//     if (sign > '04/20' < '05/20') {
//         console.log('taurus');
//         return 'taurus';
//     }
//     if (sign > '05/21' < '06/20') {
//         console.log('gemini');
//         return 'gemini';
//     }
//     if (sign > '06/21' < '07/22') {
//         console.log('cancer');
//         return 'cancer';
//     }
//     if (sign > '07/23' < '08/22') {
//         console.log('leo');
//         return 'leo';
//     }
//     if (sign > '08/23' < '09/22') {
//         console.log('virgo');
//         return 'virgo';
//     }
//     if (sign > '09/23' < '10/22') {
//         console.log('libra');
//         return 'libra';
//     }
//     if (sign > '10/23' < '11/21') {
//         console.log('scorpio');
//         return 'scorpio';
//     }
//     if (sign > '11/22' < '12/21') {
//         console.log('sagittarius');
//         return 'sagittarius';
//     }
//     if (sign > '12/22' < '01/19') {
//         console.log('capricorn');
//         return 'capricorn';
//     }
//     if (sign > '01/20' < '02/18') {
//         console.log('aquarius');
//         return 'aquarius';
//     }
//     if (sign > '02/19' < '03/20') {
//         console.log('pisces');
//         return 'pisces';
//     }
// }



// const url = 'https://horoscope-astrology.p.rapidapi.com/sign?s='+ getSign();
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3a3fb7ab1dmsh8f51104df95307dp1cbe8djsn66a0bd8e31df',
// 		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
// 	}
// };


// function getApi() {
//     fetch (url, options) 
//     .then (function (response){
//         return response.json();
//     })
//     .then (function (data){
//         console.log(data );
//     })

//     // for (let index = 0; index < array.length; index++) {
//     //     const element = array[index];
        
//     // }
// }

// getApi();

