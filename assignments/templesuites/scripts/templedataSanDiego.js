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
        if (temples[i].name == "San Diego California Temple") { 

            var myArticle = document.createElement('article');
            
            var myH2 = document.createElement('h3');
            myH2.textContent = temples[i].name;
            myArticle.appendChild(myH2);
            section.appendChild(myArticle);


            for(var j = 0; j < temples[i].address.length; j++){
                var myPara1 = document.createElement('p');
                myPara1.textContent = temples[i].address[j];
                myArticle.appendChild(myPara1);
                section.appendChild(myArticle);
            }

            var myPara2 = document.createElement('p');
            myPara2.textContent = temples[i].telephone;
            myArticle.appendChild(myPara2);
            section.appendChild(myArticle);

            var myPara3Title = document.createElement('h3');
            myPara3Title.textContent = temples[i].servicesTitle;
            myArticle.appendChild(myPara3Title);
            section.appendChild(myArticle);

            for(var j = 0; j < temples[i].services.length; j++){
                var myPara3 = document.createElement('p');
                myPara3.textContent = temples[i].services[j];
                myArticle.appendChild(myPara3);
                section.appendChild(myArticle);
            }

            var myPara4Title = document.createElement('h3');
            myPara4Title.textContent = temples[i].historyTitle;
            myArticle.appendChild(myPara4Title);
            section.appendChild(myArticle);

            for(var j = 0; j < temples[i].history.length; j++){
                var myPara4 = document.createElement('p');
                myPara4.textContent = temples[i].history[j];
                myArticle.appendChild(myPara4);
                section.appendChild(myArticle);
            }

            var myPara5Title = document.createElement('h3');
            myPara5Title.textContent = temples[i].ordinanceScheduleTitle;
            myArticle.appendChild(myPara5Title);
            section.appendChild(myArticle);

            for(var j = 0; j < temples[i].ordinanceSchedule.length; j++){
                var myPara5 = document.createElement('p');
                myPara5.textContent = temples[i].ordinanceSchedule[j];
                myArticle.appendChild(myPara5);
                section.appendChild(myArticle);
            }
            
            var myPara6Title = document.createElement('h3');
            myPara6Title.textContent = temples[i].sessionScheduleTitle;
            myArticle.appendChild(myPara6Title);
            section.appendChild(myArticle);

            for(var j = 0; j < temples[i].sessionSchedule.length; j++){
                var myPara6 = document.createElement('p');
                myPara6.textContent = temples[i].sessionSchedule[j];
                myArticle.appendChild(myPara6);
                section.appendChild(myArticle);
            }

            var myPara7Title = document.createElement('h3');
            myPara7Title.textContent = temples[i].closureScheduleTitle;
            myArticle.appendChild(myPara7Title);
            section.appendChild(myArticle);

            for(var j = 0; j < temples[i].closureSchedule.length; j++){
                var myPara7 = document.createElement('p');
                myPara7.textContent = temples[i].closureSchedule[j];
                myArticle.appendChild(myPara7);
                section.appendChild(myArticle);
            }
            
            section.appendChild(myArticle);
         } 
    }

}