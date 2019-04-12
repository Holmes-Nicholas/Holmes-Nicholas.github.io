let weatherWindchill = new XMLHttpRequest();
let apiURLstring1 = "https://api.openweathermap.org/data/2.5/forecast?id=5391811&units=imperial&APPID=03c8d968ad0c2de9c8994d20265c8465";
weatherWindchill.open('Get', apiURLstring1, true);
weatherWindchill.send();

weatherWindchill.onload = function() {
    let windchillData = JSON.parse(weatherWindchill.responseText);

    var temp = windchillData.list[0].main.temp;
    var wind = windchillData.list[0].wind.speed;

    // Processing - windChill formula
    windChill = 35.74 + 0.6215*temp + (0.4275*temp - 35.75) * Math.pow(wind, 0.16);

    document.getElementById('windchill').innerHTML = "Windchill: " + windChill.toFixed(0) + "&#8457";
}