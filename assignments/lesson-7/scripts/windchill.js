// Input - get input and convert that string to an integer
var temp = parseInt(document.getElementById('temp').innerHTML);
var wind = parseInt(document.getElementById('wind').innerHTML);

// Processing - windChill formula
windChill = 35.74 + 0.6215*temp + (0.4275*temp - 35.75) * Math.pow(wind, 0.16);

// Output - output string with HTML to innerHTML of a div
document.getElementById('windchill').innerHTML = "Windchill: " + windChill.toFixed(0) + "&#8457";
