"use strict";
let comments = [];
const commentName = document.getElementById('comment-name');
const commentBody = document.getElementById('comment-body');
const commentField = document.getElementById('comment-field');
const btnAdd = document.getElementById("comment-add");
let comment = {
    name: commentName.value,
    body: commentBody.value,
    time: Math.floor(Date.now() / 1000)
};
btnAdd.addEventListener("click", function (e) {
    comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000)
    };
    comments.push(comment);
    if (validateForm()) {
        saveComments();
        createComment();
    }
    e.preventDefault();
});
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
};
function createComment() {
    let out = "";
    const commentDiv = document.createElement("div");
    out += `<p ><em>${timeConverter(comment.time)}</em></p>`;
    out += `<p>${commentName.value}</p>`;
    out += `<p>${commentBody.value}</p>`;
    commentDiv.innerHTML = out;
    commentField.appendChild(commentDiv);
    createBtnDelete(commentDiv, deleteComment);
    commentName.value = '';
    commentBody.value = '';
};
function deleteComment() {
    const item = this.parentNode;
    const parent = item.parentNode;
    parent.removeChild(item);
};
function createBtnDelete(parent, fn) {
    const btnDel = document.createElement("button");
    btnDel.innerText = "delete";
    btnDel.addEventListener("click", fn);
    parent.appendChild(btnDel);

};
function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
};
function validateForm() {
    let form = document.forms;
    let inputName = form[0]["comment-name"].value.trim();
    let inputBody = form[0]["comment-body"].value.trim();
    if (inputName == null || inputName == "") {
        alert("Must type Name!");
        return false;
    }
    if (inputName.length < 3 || inputName.length > 50) {
        alert("Length of Name must be >3 and <50");
        return false;
    }
    if (inputBody == null || inputBody == "") {
        alert("Must type message");
        return false;
    }
    if (inputBody.length < 2 || inputBody.length > 300) {
        alert("Length of message must be >2 and <300");
        return false;
    }
    return true;
};
function loadComments() {
    if (localStorage.getItem('comments')) {
        comments = JSON.parse(localStorage.getItem('comments'));
    };
};











