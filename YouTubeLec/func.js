"use strict";

// call-back функция
function calcSumm (numOne, numTwo, more, less) {
    let numSumm = numOne + numTwo;

    if (numSumm > 3) {
        more();
    } else {
        less();
    }
}

function showMoreMessage () {
    console.log('Больше чем 3');
}

function showLessMassage () {
    console.log('Меньше чем 3');
}

calcSumm(1, 1, showMoreMessage, showLessMassage);