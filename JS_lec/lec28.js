"use strict";

const str = 'test';

console.log(str.toUpperCase()); //TEST
console.log(str.toLowerCase()); //test
console.log(str);               //test

const fruit = 'Some fruit';

console.log(fruit.indexOf('f')); //Поиск индекса значения в строке // 5

const logg = 'Hello world';

console.log(logg.slice(0, 5)); //Вырез части с текста //Так (Начало выреза, Конец выреза) //Или так (Начало выреза)
console.log(logg.substring(0, 5)); //Тоже самое

const num = 12.2;
console.log(Math.round(num)); //Округление до ближайшего целого

const nums = "12.2px";
console.log(parseInt(nums)); //Преврощает строку в инт с округлением
console.log(parseFloat(nums)); //Преврощает строку в инт без округления