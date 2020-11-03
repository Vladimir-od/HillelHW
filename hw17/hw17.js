"use strict";
let url = "https://swapi.dev/api/";
let peopleURL = "https://swapi.dev/api/people/";
let planetsURL = "https://swapi.dev/api/planets/";
let filmsURL = "https://swapi.dev/api/films/";
let starshipsURL = " https://swapi.dev/api/starships";
let vehiclesURL = "https://swapi.dev/api/vehicles/";
let speciesURL = "https://swapi.dev/api/species/";

let response = fetch(url);
response.then(function (response) {
    return response.json()
})
    .then(function (json) {
        for (let key in json) {
            createBlock(key, "list");
        };
    });


let responsePeople = fetch(peopleURL);
responsePeople.then(function (res) {
    return res.json()
}).then(function (data) {
    for (let names in data.results) {
        createBlock(data.results[names].name, "people");
    };
});

let responsePlanets = fetch(planetsURL);
responsePlanets.then(function (res) {
    return res.json()
}).then(function (data) {
    for (let names in data.results) {
        createBlock(data.results[names].name, "planets");
    };
});


let responseFilms = fetch(filmsURL);
responseFilms.then(function (res) {
    return res.json()
}).then(function (data) {
    for (let names in data.results) {
        createBlock(data.results[names].title, "films");
    };
});


let responseStarships = fetch(starshipsURL);
responseStarships.then(function (res) {
    return res.json()
}).then(function (data) {
    for (let names in data.results) {
        createBlock(data.results[names].name, "starships");
    };
});

let responseVehicles = fetch(vehiclesURL);
responseVehicles.then(function (res) {
    return res.json()
}).then(function (data) {
    for (let names in data.results) {
        createBlock(data.results[names].name, "vehicles");
    };
});


let responseSpecies = fetch(speciesURL);
responseSpecies.then(function (res) {
    return res.json()
}).then(function (data) {
    for (let names in data.results) {
        createBlock(data.results[names].name, "species");
    };
});





function createBlock(data, nameID) {
    let inf = document.createElement("div");
    inf.setAttribute("id", `${nameID}`)
    let items = document.createElement("ul");
    let listItem = document.createElement('li');
    let btn = document.createElement('button');
    btn.preventDefault;
    let htmlBody = document.getElementById("info2");
    listItem.appendChild(btn);
    inf.appendChild(items);
    items.appendChild(listItem);
    btn.textContent = `${data}`;
    htmlBody.appendChild(inf);

};










// const listItem = document.createElement('li');
// items.appendChild(listItem);
// // listItem.innerText = key;
// let a = document.createElement('a');
// listItem.appendChild(a);
// // a.href = json[key];
// a.textContent = `${key}`;