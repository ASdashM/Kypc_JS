"use strict";

//Пример 1

let usdCurr = 29;
let discount = 0.9;

function convDec(sum, curr) {
    return(sum * curr);
}

function prom(result) {
    console.log(result * discount);
}

prom(convDec(100,usdCurr));

//Пример 2

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {
            return;
        }
        
    }
    console.log("Error");
}

test();

//Пример 3

function doNothing() {}
console.log(doNothing === undefined);

//Undefind появляется в консоли в браузере, т.к. console это объект, log - функция(Метод), а любая пустая ф-я  
//возвращает undefind.