"use strict";
const addButton = document.querySelector("#add");
const addInput = document.querySelector("#item");
const inputTask = document.getElementById("item");

addButton.addEventListener("click", function () {
    const newItem = inputTask.value;
    if (newItem) {
        addItemTodo(newItem);
        inputTask.value = "";
    }
});


addInput.addEventListener("keypress", function (e) {
    if (13 === e.keyCode) {
        const newItem = inputTask.value;
        if (newItem) {
            addItemTodo(newItem);
            inputTask.value = "";
        }
    }
});

function addItemTodo(text) {
    const list = document.getElementById("todo");
    const item = document.createElement('li');
    item.innerText = text;
    const buttons = document.createElement('div');
    buttons.classList.add("buttons");
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerText = "Remove";
    remove.addEventListener("click", removeItem);
    const complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerText = "Done";
    complete.addEventListener("click", completeItem);
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);
}



function completeItem() {
    const item = this.parentNode.parentNode;
    const parent = item.parentNode;
    const id = parent.id;
    const target = (id === "todo") ? document.getElementById("completed") : document.getElementById("todo");
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

function removeItem() {
    const item = this.parentNode.parentNode;
    const parent = item.parentNode;
    parent.removeChild(item);
}