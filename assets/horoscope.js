
var star;

//Modal Element
//get modal
let modal = document.getElementById("displayModal");
//get the button that opens up modal
let btn = document.getElementById("submitBtn");
let span = document.getElementsByClassName("close")[0];

function getApi() {

    
const url = 'https://horoscope-astrology.p.rapidapi.com/sign?s='+star;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a3fb7ab1dmsh8f51104df95307dp1cbe8djsn66a0bd8e31df',
		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
	}
};
    fetch (url, options) 
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        console.log(data );
        localStorage.setItem('sign', JSON.stringify(data));
        // var horoscope = JSON.parse(localStorage.getItem('sign'));
        // console.log(horoscope);
    })

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
    // console.log(index);
}

//Modal error message
function modal() {
    $("#dialog-message" ).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  }




function assignSign(event) {
event.preventDefault();
var month = document.getElementById('month') .value;
var day = document.getElementById('day') .value;


var dates = ["03/21 - 04/19", "04/20 - May 20", "May 21 - June 20", "June 21 - July 22", "July 23 - August 22", "August 23 - September 22", "September 23 - October 22", "October 23 - November 21", "November 22 - December 21", "December 22 - January 19", "January 20 - February 18", "February 19 - March 20" ];

var signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio","sagittarius", "capricorn", "aquarius", "pisces"];

if( (month ==3 && 20<day < 22)||(month==4 && day<20) ){
    star=signs[0];
      
    }
    else if ( (month ==4 && 19 < day )||(month==5 && day<20) ){
    star=signs[1];
      
    }
    else if ( (month ==5 && 20 < day )||(month==6 && day<21) ){
    star=signs[2];
      
    }
    else if ( (month ==6 && 20 < day )||(month==7 && day<23) ){
    star=signs[3];
      
    }
    else if ( (month ==7 && 22 < day )||(month==8 && day<23) ){
    star=signs[4];
      
    }
    else if ( (month ==8 && 22 < day )||(month==9 && day<23) ){
    star=signs[5];
      
    }
    else if ( (month ==9 && 22 < day )||(month==10 && day<23) ){
    star=signs[6];
      
    }
    else if ( (month ==10 && 22 < day )||(month==11 && day<22) ){
    star=signs[7];
      
    }
    else if ( (month ==11 && 21 < day )||(month==12 && day<22) ){
    star=signs[8];
      
    }
    else if ( (month ==12 && 21 < day )||(month==1 && day<20) ){
    star=signs[9];
     
    }
    else if ( (month ==1 && 19 < day )||(month==2 && day<19) ){
    star=signs[10];
      
    }
    else if ( (month ==2 && 18 < day )||(month==3 && day<21) ){
    star=signs[11];
      
    } 
    else (month == "" && day == "") {
        modal();
    }


   getApi();
   return star;
}

// document.getElementById('submitBtn').addEventListener('click', assignSign);

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//    event.preventDefault();
//     if (event.target == modal) {
//         modal.style.displayu = "none";
//     }
// }