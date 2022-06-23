"use strict";
let num = 21;

if (num == 20) {            //Условия
    console.log("1_error");
} else if (num == 21) {
    console.log("1_ok!");
} else {
    console.log("1_enemy");
}

(num === 21) ? console.log("2_oks!") : console.log("2_error"); //Тернандный оператор

switch (num) {                  //switch
    case 32:
        console.log("3_Неверно");
        break;
    case 23:
        console.log("3_Неверно");
        break;
    case 21:
        console.log("3_Верно");
        break;
    default:
        console.log("3_enemy");
        break;
}

let num2 = 200;

//Тернандный оператор

(num2 === 201) ? console.log("4_Ok!") : console.log("4_error");

//switch

switch (num2) {
    case 100:
        console.log("5_bad");
        break;
    case 200:
        console.log("5_good");
        break;
    default:
        console.logO("5_default");
        break;
}

