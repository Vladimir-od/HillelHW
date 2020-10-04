"use strict";
let buttons = document.querySelectorAll("button");
let buttonClear = buttons[1];
let buttonAddLink = buttons[0];
let ol = document.createElement("ol");
let list = document.querySelector("list");
list.appendChild(ol);
buttonAddLink.addEventListener("click", createList);
buttonClear.addEventListener("click", removeAll);
function createList() {
    let inputData = prompt("Type link" || "");
    if (inputData == null || inputData == "" || !inputData.trim()) return;
    let li = document.createElement("li");
    ol.appendChild(li);

    let btn = document.createElement("button");
    btn.textContent = " Delete Link";
    li.after(btn);
    btn.addEventListener("click", () => {
        li.parentNode.removeChild(li);
        btn.parentNode.removeChild(btn);
    });

    let anc = document.createElement("a");
    li.appendChild(anc);
    anc.setAttribute("href", inputData.trim());
    anc.textContent = inputData.trim();
};
function removeAll() {
    let element = document.querySelector("ol");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };
};
