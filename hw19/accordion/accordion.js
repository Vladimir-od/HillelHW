"use strict";
function Accordion(element) {
    this.element = element;
    this.body = element.children[1];
    }
Accordion.prototype.show = function () {
    this.element.children[1].classList.remove("hidden");
    this.element.children[1].classList.add("active");
}
Accordion.prototype.close = function () {
    this.element.children[1].classList.remove("active");
    this.element.children[1].classList.add("hidden");
}
Accordion.prototype.toggle = function () {
    this.element.children[0].addEventListener("click", function () {
        if (this.nextElementSibling.className !== "body hidden") {
            this.nextElementSibling.classList.toggle("active")
        } else {
            this.nextElementSibling.classList.toggle("hidden")
        }
    })
}