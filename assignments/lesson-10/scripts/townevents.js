var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var towns = request.response;
    showtownsInfo(towns);
}

function showtownsInfo(jsonObj) {
    var towns = jsonObj['towns'];
    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston") { 

            var myArticle = document.createElement('article2');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myImages = document.createElement('img');

            myPara1.textContent = towns[i].events; 

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myImages);
            section.appendChild(myArticle);
         } 
    }
}
