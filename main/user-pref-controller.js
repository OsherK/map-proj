'use strict';


function onPrefSubmit(event) {
    event.preventDefault();
    let userData = {
        bgc: document.querySelector('#background-color').value,
        textColor: document.querySelector('#text-color').value,
        menuColor: document.querySelector('#menu-color').value,
        birthDate: document.querySelector('#birth-date').value,
        birthTime: document.querySelector('#birth-time').value,
        email: document.querySelector('#email').value,
        age: document.querySelector('#age').value
    }
    let fortunes = ['You will have a great day!',
        'Nothing interesting will happen',
        'You\'re gonna have a bad time'
    ]
    if (userData.birthDate && userData.birthTime) console.log(fortunes[getRandomInteger(2)]);
    saveUserData(userData);
    applyStyle();
    console.log(loadUserData());
}


function applyStyle() {
    let userData = loadUserData();
    document.body.style.backgroundColor = userData.bgc;
    document.body.style.color = userData.textColor;
    document.querySelector('.container').style.backgroundColor = userData.menuColor;
}

function keepValues() {
    let userData = loadUserData();
    document.querySelector('#background-color').value = userData.bgc;
    document.querySelector('#text-color').value = userData.textColor;
    document.querySelector('#menu-color').value = userData.menuColor;
}

function onAgeChange(el) {
    document.querySelector('#age-display').innerText = el.value;
}