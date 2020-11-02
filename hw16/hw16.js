"use strict";
function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
    setTimeout(function () { currentTime() }, 1000);
};
function updateTime(time) {
    return time < 10 ? "0" + time : time;
};
currentTime(); 