let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=03c8d968ad0c2de9c8994d20265c8465";
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('currently').innerHTML = weatherData.list[0].weather[0].description;    
    document.getElementById('high').innerHTML = weatherData.list[0].main.temp_max.toFixed(0);
    document.getElementById('humidity').innerHTML = weatherData.list[0].main.humidity;
    document.getElementById('wind').innerHTML = weatherData.list[0].wind.speed;

}