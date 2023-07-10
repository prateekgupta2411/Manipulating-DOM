const people = [
    {"name":"Jack","country":"USA","age":35},
    {"name":"Amit","country":"India","age":38},
    {"name":"Edward","country":"USA","age":41},
    {"name":"Vishal","country":"India","age":30},
    {"name":"Annie","country":"USA","age":27},
    {"name":"Nick","country":"France","age":32},
    {"name":"Francis","country":"France","age":44},
    {"name":"Preeti","country":"India","age":25},
    {"name":"Sophie","country":"France","age":29},
    {"name":"Harpreet","country":"India","age":48},
    {"name":"Bob","country":"USA","age":21}
];

function renderPerson(person) {
    const nameElem = '<div class="person-name">' + person.name + '</div>';
    const detailsElem = '<div class="person-details">Age: ' + person.age + ' | Country: ' + person.country + '</div>';
    return '<div class="person">' + nameElem + detailsElem + '</div>';
}

function showPeople() {
    const peopleHTML = people.map(renderPerson);
    const peopleList = document.getElementById('people-list');
    peopleList.innerHTML = peopleHTML.join('');
}

const showButton = document.getElementById('showButton');
showButton.addEventListener('click', showPeople);
