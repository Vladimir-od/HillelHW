"use strict";
let url = "https://swapi.dev/api/";
let peopleURL = "https://swapi.dev/api/people/";
let planetsURL = "https://swapi.dev/api/planets/";
let filmsURL = "https://swapi.dev/api/films/";
let starshipsURL = " https://swapi.dev/api/starships";
let vehiclesURL = "https://swapi.dev/api/vehicles/";
let speciesURL = "https://swapi.dev/api/species/";
let info2 = document.getElementById("info2");

let response = fetch(url);
response.then(function (response) {
    return response.json()
})
    .then(function (json) {
        for (let key in json) {
            createBlock(key, "list");
        };
        createBlockItems("list")
    });

function createBlock(data, nameID) {
    let items = document.createElement("ul");
    let listItem = document.createElement('li');
    let btn = document.createElement('button');
    btn.preventDefault;
    btn.setAttribute("class", `${nameID}`)
    let htmlBody = document.getElementById("info");
    listItem.appendChild(btn);
    items.appendChild(listItem);
    btn.textContent = `${data}`;
    htmlBody.appendChild(items);
};

function createBlockItems(btnID) {
    let infos = document.querySelectorAll(`.${btnID}`);
    for (let i = 0; i < infos.length; i++) {
        infos[i].addEventListener("click", function () {
            getRespond(this.textContent)
        })
    }
}
function makeURL(urlEnd) {
    let url = "https://swapi.dev/api/";
    if (!urlEnd) {
        return url;
    }
    return url + urlEnd;
};

function getRespond(nameItem) {
    let url = makeURL(nameItem);
    let answer = fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            for (let names in data.results) {
                createBlock2(data.results[names].name, `${nameItem}`);
            };
        });
    // createBlockItems(nameItem)
    return answer;
}
function createBlock2(data, nameID) {
    let items = document.createElement("ul");
    let listItem = document.createElement('li');
    let btn = document.createElement('button');
    btn.preventDefault;
    btn.setAttribute("class", `${nameID}`)
    let htmlBody = document.getElementById("info2");
    listItem.appendChild(btn);
    items.appendChild(listItem);
    btn.textContent = `${data}`;
    htmlBody.appendChild(items);
    htmlBody.style.display = "block"
};

function getRespondDetail(){
  
    let res = fetch(peopleURL).then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
    })
}
getRespondDetail()
