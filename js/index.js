'use strict';

console.log("Sweet, black-tar, Columbian JS loaded.");

const generateMadlib = document.querySelector('#generateMadlib');

console.log(generateMadlib);

generateMadlib.addEventListener('submit', function (event) {
    event.preventDefault();
    // Event functions
    const inputSelectors = document.querySelectorAll('input');
    const placeholders = document.querySelectorAll(".madlib_placeholder");

    let inputArray = [];
    inputSelectors.forEach(function (inputItem) {
        inputArray.push(inputItem);
    });

    placeholders.forEach(function (placeholders, index) {
        placeholders.innerHTML = inputArray[index].value;
    });
});