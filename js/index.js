'use strict';

console.log("Sweet, black-tar, Columbian JS loaded.");

const generateMadlib = document.querySelector("#generateMadlib");

generateMadlib.addEventListener('submit', function (event) {
    event.preventDefault();
    // Event functions
    const inputSelectors = document.querySelectorAll('input');
    const foodResponse = document.querySelector('#foodResponse');
    const drinkResponse = document.querySelector('#drinkResponse');

    inputSelectors.forEach(function (inputItem) {
        if (inputItem.name === 'favFood') {
            foodResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'favDrink') {
            drinkResponse.innerHTML = inputItem.value;
        }
    });
});