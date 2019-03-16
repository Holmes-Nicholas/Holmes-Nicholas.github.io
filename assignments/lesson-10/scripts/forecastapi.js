let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=03c8d968ad0c2de9c8994d20265c8465";
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);
/*
    document.getElementById('currently').innerHTML = forecastData.list[0].weather[0].description;    
    document.getElementById('high').innerHTML = forecastData.list[0].main.temp.toFixed(0);
*/
    document.getElementById('current-temp').innerHTML = forecastData.list[0].main.temp.toFixed(0);

    let icon = "http://openweathermap.org/img/w/" + forecastData.list[0].weather[0].icon + ".png";
    let desc = forecastData.list[0].weather[0].description;

    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);

}

/*
https://stackoverflow.com/questions/49640174/building-a-5-day-forecast-using-open-weather-api-ajax-and-js


var key = "YOUR KEY";
var city = "YOUR CITY"; // My test case was "London"
var url = "https://api.openweathermap.org/data/2.5/forecast";

$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: city,
    appid: key,
    units: "metric",
    cnt: "10"
  },
  success: function(data) {
    console.log('Received data:', data) // For testing
    var wf = "";
    wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
    $.each(data.list, function(index, val) {
      wf += "<p>" // Opening paragraph tag
      wf += "<b>Day " + index + "</b>: " // Day
      wf += val.main.temp + "&degC" // Temperature
      wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      wf += "</p>" // Closing paragraph tag
    });
    $("#showWeatherForcast").html(wf);
  }
});
*/