"use strict";
const htmlContent = document.querySelectorAll(".title");

class Accordion {
    constructor(html) {
        this.htmlContent = html;
        this.title = [...html];
        this.body = document.querySelectorAll(".body");
        this.toggle = function () {
            htmlContent.forEach(title => {
                title.addEventListener("click", function () {
                    let content = title.nextElementSibling;
                    content.classList.toggle("active");
                    if (content.className == "body active") {
                        content.style.maxHeight = content.scrollHeight + "px";
                    } else {
                        content.style.maxHeight = 0;
                    }
                });
            });
        };
    }
}
let acc = new Accordion(htmlContent);
acc.toggle();
console.log(acc.body)




















// htmlContent.forEach(title => {
//     title.addEventListener("click", function () {
//         let content = title.nextElementSibling;
//         console.log(content);
//         content.classList.toggle("active");
//         if (content.className == "body active") {
//             content.style.maxHeight = content.scrollHeight + "px";
//         } else {
//             content.style.maxHeight = 0;
//         }
//     })
// })