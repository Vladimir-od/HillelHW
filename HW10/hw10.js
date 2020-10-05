"use strict";
const buttons = document.querySelectorAll("button");
const buttonClear = buttons[1];
const buttonAddLink = buttons[0];
const ol = document.createElement("ol");
const div = document.querySelector("div");
div.appendChild(ol);
buttonAddLink.addEventListener("click", createList);
buttonClear.addEventListener("click", removeAll);
function createList() {
    const inputData = prompt("Type link" || "");
    if (inputData == null || inputData == "" || !inputData.trim()) return;
    const li = document.createElement("li");
    ol.appendChild(li);

    const btn = document.createElement("button");
    btn.textContent = " Delete Link";
    li.after(btn);
    btn.addEventListener("click", () => {
        li.remove();
        btn.remove();
    });

    const anc = document.createElement("a");
    li.appendChild(anc);
    anc.setAttribute("href", inputData.trim());
    anc.textContent = inputData.trim();
};
function removeAll() {
    const element = document.querySelector("ol");
    element.innerHTML = "";
};
