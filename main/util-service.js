'use strict';

function onInit() {
    applyStyle();
}

function getRandomInteger(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min + 1);
}