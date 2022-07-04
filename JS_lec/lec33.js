"use strict";

let arr = [2, 3, 5, 6, 10];

arr.pop(); //удаляет элемент с конца

arr.push(21); //Добавляет элемент в конец

//Методы перебора 

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} in massive ${arr}`);
});

const str = prompt("", "");
const products = str.split(", "); //Преобразует строку в массиы 
console.log(products); 
console.log(products.join); //Преобразует массив в строку
console.log(products.sortO(compareNum)); //Сортирует массив|Если строка то по алфовиту, если числа то по первой цифре

//С этой функцией сортирует числа по порядку

function compareNum (a, b) {
    return a - b;
}