"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var url = "https://swapi.dev/api/";
var listName = document.querySelector(".listName");
var list = document.querySelector(".list");
var listDetail = document.querySelector(".listDetail");

function init() {
  var response = fetch(url);
  response.then(function (response) {
    return response.json();
  }).then(function (json) {
    for (var data in json) {
      var btn = document.createElement('button');
      var li = document.createElement('li');
      btn.preventDefault;
      btn.addEventListener("click", function () {
        var preloaderEl = document.getElementById('preloader2');
        preloaderEl.classList.add('visible');
        preloaderEl.classList.remove('hidden');
        loadData2();
        this.classList.add("active");
      }); // btn.setAttribute("class", `${data}`)

      list.appendChild(li);
      li.appendChild(btn);
      btn.textContent = "".concat(data);
    }

    ;
    createBlockItems();
  });
}

init();

function createBlockItems() {
  var btns = document.querySelectorAll("ul.list>li>button");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      if (listName.childElementCount > 0) {
        return;
      }

      getRespond(this.textContent);
    });
  }
}

;

function getRespond(nameItem) {
  var url = makeURL(nameItem);
  var answer = fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    for (var names in data.results) {
      createBlock(data.results[names].name, nameItem, names);
    }

    ;
    closeInfo(listName);
  });
  return answer;
}

;

function makeURL(urlEnd) {
  var url = "https://swapi.dev/api/";
  return url + urlEnd;
}

;

function createBlock(data, itemName, countNum) {
  var btn2 = document.createElement('button');
  var li = document.createElement('li');
  btn2.addEventListener("click", function () {
    var preloaderEl = document.getElementById('preloader3');
    preloaderEl.classList.add('visible');
    preloaderEl.classList.remove('hidden');
    loadData3();
    this.classList.add("active");
  });
  btn2.addEventListener("click", getRespondDetails);
  btn2.preventDefault;
  btn2.setAttribute("id", "".concat(countNum));
  btn2.setAttribute("name", "".concat(itemName));
  listName.appendChild(li);
  li.appendChild(btn2);
  btn2.textContent = "".concat(data);
}

;

function closeInfo(blockName) {
  var btnDel = document.createElement("button");
  btnDel.innerText = "Close";
  btnDel.addEventListener("click", function () {
    btnDel.parentElement.innerHTML = "";
  });
  blockName.appendChild(btnDel);
}

;

function makeURL2(urlEnd, id) {
  var url = "https://swapi.dev/api/";
  return url + urlEnd + "/" + ++id + "/";
}

;

function getRespondDetails() {
  if (listDetail.childElementCount > 0) {
    return;
  }

  var url = makeURL2(this.getAttribute("name"), this.getAttribute("id"));
  var answer = fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    var output = "";

    for (var key in data) {
      console.log(_typeof(data[key]));

      if (typeof data[key] == "string") {
        output += key + ': ' + data[key] + '; </br>';
      }
    }

    createBlockDetails(output);
  });
  return answer;
}

;

function createBlockDetails(data) {
  var li = document.createElement('li');
  closeInfo(listDetail);
  li.innerHTML = data;
  listDetail.appendChild(li);
}

;
loadData();

function loadData() {
  return setTimeout(function () {
    var preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  }, 2000);
}

function loadData2() {
  return setTimeout(function () {
    var preloaderEl = document.getElementById('preloader2');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  }, 2000);
}

function loadData3() {
  return setTimeout(function () {
    var preloaderEl = document.getElementById('preloader3');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  }, 2000);
}