let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=03c8d968ad0c2de9c8994d20265c8465";
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('current-temp').innerHTML = weatherData.list[0].main.temp;

    let icon = "https://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png";
    let desc = weatherData.list[0].weather[0].description;

    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);

}