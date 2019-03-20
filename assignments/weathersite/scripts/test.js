let experienceObject = {
    name: 'Raymon',
    title: 'Lead Frontend/JavaScript Developer',
    yearsExperience: 8,
    projects: [
        {
            name: ‘Company A’,
            title: 'Senior JavaScript Developer',
            techniques: ['Angular', 'ES6', 'Vanilla JavaScript', 'Less', 'CSS']
        },
        {
            name: ‘Company B’,
            title: 'Lead JavaScript Developer',
            techniques: ['Angular 2', 'AngularJS', 'ES6', 'Vanilla JavaScript', 'Web Sockets', 'D3']
        },
        {
            name: ‘Company C’,
            title: 'Senior Frontend Developer',
            techniques: ['Vanilla JavaScript', 'CSS', 'Responsive Webdesign']
        }
    ]
}

var objectKeys = Object.keys(experienceObject);
console.log(‘objectKeys: ‘, objectKeys);