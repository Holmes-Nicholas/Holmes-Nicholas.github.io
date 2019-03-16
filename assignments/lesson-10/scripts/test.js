
let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=03c8d968ad0c2de9c8994d20265c8465";
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();
        
forecastRequest.onload = function() {
    let forecast = [];
    let firstDay = 1;
    let forecastData = JSON.parse(forecastRequest.responseText);
    //let icon = "https://openweathermap.org/img/w/" + forecastData.list[0].weather[0].icon + ".png";
    let iconArray = [];
    let icon = 1;
    let descArray = [];
    let desc = 1;
    //let desc = forecastData.list[0].weather[0].description;

    console.log(forecastData);

    forecastData.list.forEach(x => {
        if (x.dt_txt.includes('18:00:00')) {
            forecast[firstDay] = x.main.temp;
            firstDay++;
        }
    });

    forecastData.list.forEach(x => {
        if (x.dt_txt.includes('18:00:00')) {
            iconArray[icon] = "https://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
            icon++;
        }
    });

    forecastData.list.forEach(x => {
        if (x.dt_txt.includes('18:00:00')) {
            descArray[desc] = x.weather[0].description;
            desc++;
        }
    });
        
    for ( var i = 1; i <= 5; i++) {
        document.getElementById('day' + i).innerHTML = forecast[i].toFixed(0) + "&deg;" + "F";
        document.getElementById('cc-img' + i).setAttribute('src', iconArray[i]);
        document.getElementById('cc-img' + i).setAttribute('alt', descArray[i]);
    }
};

//document.getElementById('cc-img' + i).setAttribute('src', icon);
//document.getElementById('cc-img' + i).setAttribute('alt', desc);