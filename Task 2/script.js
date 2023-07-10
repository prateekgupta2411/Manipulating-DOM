var people = [
    {"name": "Jack", "country": "USA", "age": 35},
    {"name": "Amit", "country": "India", "age": 38},
    {"name": "Edward", "country": "USA", "age": 41},
    {"name": "Vishal", "country": "India", "age": 30},
    {"name": "Annie", "country": "USA", "age": 27},
    {"name": "Nick", "country": "France", "age": 32},
    {"name": "Francis", "country": "France", "age": 44},
    {"name": "Preeti", "country": "India", "age": 25},
    {"name": "Sophie", "country": "France", "age": 29},
    {"name": "Harpreet", "country": "India", "age": 48},
    {"name": "Bob", "country": "USA", "age": 21}
];

function showPeople() {
    var container = document.getElementById("people-list");
    container.innerHTML = ""; // Clear previous content
    
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        var personInfo = "Name: " + person.name + ", Country: " + person.country + ", Age: " + person.age;
        var personElement = document.createElement("p");
        personElement.textContent = personInfo;
        container.appendChild(personElement);
    }
}

function hidePeople() {
    var container = document.getElementById("people-list");
    container.innerHTML = ""; // Clear the content
}

function sortByName() {
    people.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
    showPeople();
}

function sortByCountry() {
    people.sort(function(a, b) {
        return a.country.localeCompare(b.country);
    });
    showPeople();
}

function sortByAge() {
    people.sort(function(a, b) {
        return a.age - b.age;
    });
    showPeople();
}

function sortByCountryAndName() {
    people.sort(function(a, b) {
        if (a.country === b.country) {
            return a.name.localeCompare(b.name);
        } else {
            return a.country.localeCompare(b.country);
        }
    });
    showPeople();
}

function sortByCountryAndAge() {
    people.sort(function(a, b) {
        if (a.country === b.country) {
            return a.age - b.age;
        } else {
            return a.country.localeCompare(b.country);
        }
    });
    showPeople();
}

function showByCountry(country) {
    var filteredPeople = people.filter(function(person) {
        return person.country === country;
    });
    var container = document.getElementById("people-list");
    container.innerHTML = ""; // Clear previous content
    
    for (var i = 0; i < filteredPeople.length; i++) {
        var person = filteredPeople[i];
        var personInfo = "Name: " + person.name + ", Country: " + person.country + ", Age: " + person.age;
        var personElement = document.createElement("p");
        personElement.textContent = personInfo;
        container.appendChild(personElement);
    }
}

function styleByCountry() {
    var container = document.getElementById("people-list");
    container.innerHTML = ""; // Clear previous content
    
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        var personInfo = "Name: " + person.name + ", Country: " + person.country + ", Age: " + person.age;
        var personElement = document.createElement("p");
        personElement.textContent = personInfo;
        
        if (person.country === "India") {
            personElement.classList.add("person-india");
        } else if (person.country === "USA") {
            personElement.classList.add("person-usa");
        } else if (person.country === "France") {
            personElement.classList.add("person-france");
        }
        
        container.appendChild(personElement);
    }
}

function styleByAge() {
    var container = document.getElementById("people-list");
    container.innerHTML = ""; // Clear previous content
    
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        var personInfo = "Name: " + person.name + ", Country: " + person.country + ", Age: " + person.age;
        var personElement = document.createElement("p");
        personElement.textContent = personInfo;
        
        if (person.age <= 30) {
            personElement.classList.add("person-age-30");
        } else if (person.age > 30 && person.age <= 40) {
            personElement.classList.add("person-age-40");
        } else if (person.age >= 40) {
            personElement.classList.add("person-age-40plus");
        }
        
        container.appendChild(personElement);
    }
}
