"use strict";
const photos = document.querySelector(".photos");
const images = document.querySelectorAll("#gallery .photos img");
const btn_prev = document.querySelector('#gallery .buttons .prev');
const btn_next = document.querySelector('#gallery .buttons .next');
let i = 0;
btn_next.addEventListener("click", drawNext);
btn_prev.addEventListener("click", drawPrev);
popUp();
createDots();
function drawNext() {
    images[i].style.display = 'none';
    i = i + 1;
    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'block';
};
function drawPrev() {
    images[i].style.display = 'none';
    i = i - 1;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
};
function popUp() {
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", () => {
            window.open(images[i].src);
        });
    };
};
function createDots() {
    const dotsContainer = document.createElement("ol");
    dotsContainer.classList.add("slider-dots");
    for (let i = 0; i < images.length; i++) {
        const dotsItem = document.createElement("li");
        dotsItem.classList.add("slider-dots_item");
        dotsContainer.appendChild(dotsItem);
    }
    photos.appendChild(dotsContainer);
}












