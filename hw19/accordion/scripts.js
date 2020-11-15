"use strict";
const htmlElement = new Accordion(document.querySelector("#html"));
const cssElement = new Accordion(document.querySelector("#css"));
const jsElement = new Accordion(document.querySelector("#js"));
const accordions = [htmlElement, cssElement, jsElement];
accordions.forEach(function (accordion) {
    accordion.toggle();
})
