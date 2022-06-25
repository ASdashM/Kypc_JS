"use strict";

//Задача 1

function sayHello(name) {
    return (`Привет, ${name}`);
}

//Задача 2

function returnNeighboringNumbers(number) {
    let arr = [];
    arr[0] = number - 1;
    arr[1] = number;
    arr[2] = number + 1;
    console.log(arr);
}
returnNeighboringNumbers(5);

//Задача 3

function getMathResult(a, b) {
    if(typeof(a) === "number" && a > 0) {
        if(typeof(b) !== "number" || b <= 0) {
            console.log(a);
        } else {
            let str = '',
                step = 0;
            for (b; b > 0; b--) {
                step += a;
                str += step;
                if (b === 1){
                    break;
                } else { 
                    str += '--';
                }
            }
                console.log(str);
        }
    } else {
        console.log('ERROR');
    }
}
getMathResult(5, 3);

