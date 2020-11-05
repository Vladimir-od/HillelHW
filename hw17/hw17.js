"use strict";
const url = "https://swapi.dev/api/";
const listName = document.querySelector(".listName");
const list = document.querySelector(".list");
const listDetail = document.querySelector(".listDetail");


function init() {
    const response = fetch(url);
    response.then(function (response) {
        return response.json()
    })
        .then(function (json) {
            for (const data in json) {
                const btn = document.createElement('button');
                const li = document.createElement('li');
                btn.preventDefault;
                btn.setAttribute("class", `${data}`)
                list.appendChild(li);
                li.appendChild(btn)
                btn.textContent = `${data}`;
            };
            createBlockItems()
        });

}
init();

function createBlockItems() {
    const btns = document.querySelectorAll("ul.list>li>button");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            getRespond(this.textContent)
        })
    }
};
function getRespond(nameItem) {
    const url = makeURL(nameItem);
    const answer = fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            for (const names in data.results) {
                createBlock(data.results[names].name, nameItem);
            };
        });
    return answer;
};
function makeURL(urlEnd) {
    const url = "https://swapi.dev/api/";
    return url + urlEnd;
};
function createBlock(data, itemName) {
    const btn = document.createElement('button');
    const li = document.createElement('li');
    btn.preventDefault;
    btn.setAttribute("class", `${itemName}`)
    listName.appendChild(li);
    li.appendChild(btn)
    btn.textContent = `${data}`;
};

createBlockNameDetails();

function createBlockNameDetails() {
    const btns = document.querySelectorAll("ul.listName");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", getRespondDetails)
    }
};
function getRespondDetails() {
    let url = "https://swapi.dev/api/people/1/"
    const answer = fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            let output = "";
            for (const key in data) {
                output += key + ': ' + data[key] + '; </br>';
            }
            createBlockDetails(output)
        });
    return answer;
};
function createBlockDetails(data) {
    const li = document.createElement('li');
    li.innerHTML = data;
    listDetail.appendChild(li);
};