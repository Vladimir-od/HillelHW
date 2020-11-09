"use strict";
const url = "https://swapi.dev/api/";
const listName = document.querySelector(".listName");
const list = document.querySelector(".list");
const listDetail = document.querySelector(".listDetail");
const info2 = document.getElementById("info2");


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
                btn.addEventListener("click", function () {
                    
                    let preloaderEl = document.getElementById('preloader2');
                    preloaderEl.classList.add('visible');
                    preloaderEl.classList.remove('hidden');
                    loadData2()
                    this.classList.add("active");
                    
                });
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
            if (listName.childElementCount > 0) {
                return;
            }
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
                if (nameItem == "films") {
                    createBlock(data.results[names].title, nameItem, names);
                } else {

                    createBlock(data.results[names].name, nameItem, names);
                }
            };
            closeInfo(listName);
        });
    return answer;
};
function makeURL(urlEnd) {
    const url = "https://swapi.dev/api/";
    return url + urlEnd;
};
function createBlock(data, itemName, countNum) {
    const btn2 = document.createElement('button');
    const li = document.createElement('li');
    btn2.addEventListener("click", function () {
        const preloaderEl = document.getElementById('preloader3');
        preloaderEl.classList.add('visible');
        preloaderEl.classList.remove('hidden');
        loadData3();
        this.classList.add("active");
    });
    btn2.addEventListener("click", getRespondDetails);
    btn2.preventDefault;
    btn2.setAttribute("id", `${countNum}`);
    btn2.setAttribute("name", `${itemName}`);
    listName.appendChild(li);
    li.appendChild(btn2)
    btn2.textContent = `${data}`;

};
function closeInfo(blockName) {
    const btnDel = document.createElement("button");
    btnDel.innerText = "Close";
    btnDel.className = "delete";
    btnDel.addEventListener("click", function () {
        btnDel.parentElement.innerHTML = "";
    });
    blockName.appendChild(btnDel)
};
function makeURL2(urlEnd, id) {
    const url = "https://swapi.dev/api/";
    return url + urlEnd + "/" + ++id + "/";
};
function getRespondDetails() {
    if (listDetail.childElementCount > 0) {
        return;
    }
    let url = makeURL2(this.getAttribute("name"), this.getAttribute("id"))
    const answer = fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            let output = "";
            for (const key in data) {
                if (typeof data[key] == "string") {
                    output += key + ': ' + data[key] + '; </br>';
                }
            }
            createBlockDetails(output);
        });
    return answer;
};
function createBlockDetails(data) {
    const li = document.createElement('li');
    closeInfo(listDetail);
    li.innerHTML = data;
    listDetail.appendChild(li);
};
loadData();
function loadData() {
    return setTimeout(() => {
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');

    }, 2000);
}
function loadData2() {
    return setTimeout(() => {
        let preloaderEl = document.getElementById('preloader2');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');

    }, 1000);
}
function loadData3() {
    return setTimeout(() => {
        let preloaderEl = document.getElementById('preloader3');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');

    }, 1000);
}