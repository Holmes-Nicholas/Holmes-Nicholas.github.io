var section = document.querySelector('section');

var requestURL = 'https://holmes-nicholas.github.io/assignments/templesuites/data/templedata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var temples = request.response;
    showtempleInfo(temples);
}

function showtempleInfo(jsonObj) {

    var towns = jsonObj['temples'];
    for (var i = 0; i < temples.length; i++) {
        if (towns[i].name == "Atlanta" || towns[i].name == "Nashville" || towns[i].name == "Orlando") { 

            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myImages = document.createElement('img');


            myH2.textContent = towns[i].name;
            myPara1.textContent = towns[i].address;
            myPara2.textContent = towns[i].telephone;
            myPara3.textContent = towns[i].services;
            myPara4.textContent = towns[i].history;


            if (towns[i].name == 'Atlanta') {
                myImages.setAttribute('src', 'https://holmes-nicholas.github.io/assignments/templesuites/images/temple/atlanta/atlanta-day-full-small.jpg');
                myImages.setAttribute('alt', 'Atlanta, GA');
            }
            else if (towns[i].name == 'Orlando') {
                myImages.setAttribute('src', 'https://holmes-nicholas.github.io/assignments/templesuites/images/temple/orlando/orlando-evening-full-small.jpg');
                myImages.setAttribute('alt', 'Orlando, FL');
            }
            else if (towns[i].name == 'Nashville') {
                myImages.setAttribute('src', 'https://holmes-nicholas.github.io/assignments/templesuites/images/temple/nashville/nashville-day-full-small.jpg');
                myImages.setAttribute('alt', 'Nashville, TN');
            }

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myImages);

            section.appendChild(myArticle);
         } 
    }
}
