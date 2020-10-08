"use strict";

let images = document.querySelectorAll("#gallery .photos img");
let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');
let i = 0;
btn_next.addEventListener("click", drawNext);
btn_prev.addEventListener("click", drawPrev);
popUp();
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
        })
    }
};



















// let slides = document.querySelectorAll(".slide-single");
// let slider= [];
// console.log(slides);
// for(let i = 0; i<slides.length;i++){

//     slider[i]=slides[i].src;
//     slides[i].remove();
// }
// console.log(slider);
// let step = 0;
// let offset = 0;
// function draw(){
//     let img = document.createElement("img");
//     img.src=slider[step];
//     img.classList.add("slide-single");
//     img.style.left=offset*512+"px";
//     document.querySelector("#slide").appendChild(img);
//     if(step+1==slider.length){
//         step=0;
//     }else{
//         step++;
//     }

//     offset=1;
// }
// function left(){
//     document.onclick = null;
//     let slides2 = document.querySelectorAll(".slide-single");
//     let offset2 = 0;
//     for(let i=0;i<slides2.length;i++){
//         slides2[i].style.left= offset2*512- 512 +"px";
//         offset2++;
//     }
//     setTimeout(function(){
//         slides2[0].remove();
//         document.onclick = left;
//         draw();
//     },1000)

// }
// draw();draw();
// document.onclick = left;