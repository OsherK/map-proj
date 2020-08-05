'use strict';


function saveUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));

}

function loadUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}