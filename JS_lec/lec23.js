"use strict";

//Вложенный цикл FOR

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = "";
const len = 7;

for (let istar = 1; istar < len; istar++){
    for (let jstar = 1; jstar < istar; jstar++){
        result += "*";        
    }
    result += "\n";
}
console.log(result);

//Метка

first: for (let imb = 0; imb < 3; imb++) {
    console.log(`First level: ${imb}`);
    for (let jmb = 0; jmb < 3; jmb++) {
        console.log(`Second level: ${jmb}`);
        for (let kmb = 0; jmb < 3; jmb++) {
            if (kmb === 2) {continue first;}    //Можно использовать как CONTINUE или BREAK
            console.log(`Third level: ${kmb}`);
        }
    }
}