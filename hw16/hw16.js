"use strict";
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
function currentTime() {
    sec++;
    if (sec == 59) {
        min++;
        sec = 0;

    } else if (sec < 10) {
        sec = "0" + sec;
    };
    if (min == 59) {
        hour++;
        min = 0;
    }
    if (hour == 23 && min == 59 && sec == 59) {
        hour = 0; min = 0; sec = 0;
    }
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
    setTimeout(function () { currentTime() }, 1000);
};
currentTime();


