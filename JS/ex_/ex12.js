"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        console.log('Ошибка!');
    } else {
    console.log(str.split('').reverse().join(''));
    }
    //Вариант 2 без return
    // typeof(str) !== 'string' ? console.log('Ошибка!') : console.log(str.split('').reverse().join('')); 
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];
function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        console.log("Нет доступных валют");
    } else {
        if (missingCurr === '') {
            let str = 'Доступные валюты:\n';
            arr.forEach(cur => {
                str += `${cur}\n`;
            });
            console.log(str);
        } else {
            let strr = 'Доступные валюты:\n';
            arr.forEach(curr => {
                if (curr !== missingCurr) {
                    strr += `${curr}\n`;
                }
            });
            console.log(strr);
        }
    }
}

availableCurr(allCurrencies);