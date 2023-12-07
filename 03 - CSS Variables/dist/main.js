"use strict";
let inputs = document.querySelectorAll(".controls input");
const updateInputValue = (e) => {
    let element = e.target;
    let suffix = element.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${element.name}`, `${element.value}${suffix}`);
};
inputs.forEach((input) => input.addEventListener("input", updateInputValue));
