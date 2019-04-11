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

    var temples = jsonObj['temples'];
    for (var i = 0; i < temples.length; i++) {
        if (temples[i].name == "Atlanta" || temples[i].name == "Nashville" || temples[i].name == "Orlando") { 

            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myImages = document.createElement('img');


            myH2.textContent = temples[i].name;
            myPara1.textContent = temples[i].address;
            myPara2.textContent = temples[i].telephone;
            myPara3.textContent = temples[i].services;
            myPara4.textContent = temples[i].history;


            if (temples[i].name == 'Atlanta') {
                myImages.setAttribute('src', 'https://holmes-nicholas.github.io/assignments/templesuites/images/temple/atlanta/atlanta-day-full-small.jpg');
                myImages.setAttribute('alt', 'Atlanta, GA');
            }
            else if (temples[i].name == 'Orlando') {
                myImages.setAttribute('src', 'https://holmes-nicholas.github.io/assignments/templesuites/images/temple/orlando/orlando-evening-full-small.jpg');
                myImages.setAttribute('alt', 'Orlando, FL');
            }
            else if (temples[i].name == 'Nashville') {
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
