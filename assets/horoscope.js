
var star;
var star2;

function getApi() {


    const url = 'https://horoscope-astrology.p.rapidapi.com/sign?s=' + star;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3a3fb7ab1dmsh8f51104df95307dp1cbe8djsn66a0bd8e31df',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        }
    };
    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            localStorage.setItem('sign', JSON.stringify(data));
            location.assign('display.html');
        })


}



function assignSign(event) {
    event.preventDefault();
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;


    var dates = ["03/21 - 04/19", "04/20 - May 20", "May 21 - June 20", "June 21 - July 22", "July 23 - August 22", "August 23 - September 22", "September 23 - October 22", "October 23 - November 21", "November 22 - December 21", "December 22 - January 19", "January 20 - February 18", "February 19 - March 20"];

    var signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

    if ((month == 3 && 20 < day < 22) || (month == 4 && day < 20)) {
        star = signs[0];

    }
    else if ((month == 4 && 19 < day) || (month == 5 && day < 20)) {
        star = signs[1];

    }
    else if ((month == 5 && 20 < day) || (month == 6 && day < 21)) {
        star = signs[2];

    }
    else if ((month == 6 && 20 < day) || (month == 7 && day < 23)) {
        star = signs[3];

    }
    else if ((month == 7 && 22 < day) || (month == 8 && day < 23)) {
        star = signs[4];

    }
    else if ((month == 8 && 22 < day) || (month == 9 && day < 23)) {
        star = signs[5];

    }
    else if ((month == 9 && 22 < day) || (month == 10 && day < 23)) {
        star = signs[6];

    }
    else if ((month == 10 && 22 < day) || (month == 11 && day < 22)) {
        star = signs[7];

    }
    else if ((month == 11 && 21 < day) || (month == 12 && day < 22)) {
        star = signs[8];

    }
    else if ((month == 12 && 21 < day) || (month == 1 && day < 20)) {
        star = signs[9];

    }
    else if ((month == 1 && 19 < day) || (month == 2 && day < 19)) {
        star = signs[10];

    }
    else if ((month == 2 && 18 < day) || (month == 3 && day < 21)) {
        star = signs[11];

    }

    getApi();

    return star;
}



function getApi2() {
    const url = 'https://chinese-zodiacs-ai.p.rapidapi.com/get_zodiac/' + star2 + '/daily/simplified';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c37dddf20emshf13a5c8ff40d72dp1a769fjsn2a372b221a18',
            'X-RapidAPI-Host': 'chinese-zodiacs-ai.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            localStorage.setItem('sign2', JSON.stringify(data));
                location.assign('display.html');
        })

}


function assignSign2(event) {
    event.preventDefault();
    var year = document.getElementById('year').value;
    var signs2 = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];

    if (year == 1900 || year == 1912 || year == 1924 || year == 1936 || year == 1948 || year == 1960 || year == 1972 || year == 1984 || year == 1996 || year == 2008 || year == 2020) {
        star2 = signs2[0];
    }
    else if (year == 1901 || year == 1913 || year == 1925 || year == 1937 || year == 1949 || year == 1961 || year == 1973 || year == 1985 || year == 1997 || year == 2009 || year == 2021) {
        star2 = signs2[1];
    }
    else if (year == 1902 || year == 1914 || year == 1926 || year == 1938 || year == 1950 || year == 1962 || year == 1974 || year == 1986 || year == 1998 || year == 2010 || year == 2022) {
        star2 = signs2[2];
    }
    else if (year == 1903 || year == 1915 || year == 1927 || year == 1939 || year == 1951 || year == 1963 || year == 1975 || year == 1987 || year == 1999 || year == 2011 || year == 2023) {
        star2 = signs2[3];
    }
    else if (year == 1904 || year == 1916 || year == 1928 || year == 1940 || year == 1952 || year == 1964 || year == 1976 || year == 1988 || year == 2000 || year == 2012 || year == 2024) {
        star2 = signs2[4];
    }
    else if (year == 1905 || year == 1917 || year == 1929 || year == 1941 || year == 1953 || year == 1965 || year == 1977 || year == 1989 || year == 2001 || year == 2013 || year == 2025) {
        star2 = signs2[5];
    }
    else if (year == 1906 || year == 1918 || year == 1930 || year == 1942 || year == 1954 || year == 1966 || year == 1978 || year == 1990 || year == 2002 || year == 2014 || year == 2026) {
        star2 = signs2[6];
    }
    else if (year == 1907 || year == 1919 || year == 1931 || year == 1943 || year == 1955 || year == 1967 || year == 1979 || year == 1991 || year == 2003 || year == 2015 || year == 2027) {
        star2 = signs2[7];
    }
    else if (year == 1908 || year == 1920 || year == 1932 || year == 1944 || year == 1956 || year == 1968 || year == 1980 || year == 1992 || year == 2004 || year == 2016 || year == 2028) {
        star2 = signs2[8];
    }
    else if (year == 1909 || year == 1921 || year == 1933 || year == 1945 || year == 1957 || year == 1969 || year == 1981 || year == 1993 || year == 2005 || year == 2017 || year == 2029) {
        star2 = signs2[9];
    }
    else if (year == 1910 || year == 1922 || year == 1934 || year == 1946 || year == 1958 || year == 1970 || year == 1982 || year == 1994 || year == 2006 || year == 2018 || year == 2030) {
        star2 = signs2[10];
    }
    else if (year == 1911 || year == 1923 || year == 1935 || year == 1947 || year == 1959 || year == 1971 || year == 1983 || year == 1995 || year == 2007 || year == 2019 || year == 2031) {
        star2 = signs2[11];
    }

    
    localStorage.setItem('star2', JSON.stringify(star2));
    console.log(star2);
    getApi2();
    return star2;
}



document.getElementById('submit').
    addEventListener('click', assignSign);

document.getElementById('submit2').
    addEventListener('click', assignSign2);



