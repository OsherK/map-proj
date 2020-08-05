'use strict';

function onInit() {
    applyStyle();
}

function getRandomInteger(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min + 1);
}

map = new google.maps.Map(document.querySelector('#map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
});