"use strict";

//Примитивные передают значение

let a = 5,
    b = a;
b = b + 5;
console.log(b);
console.log(a);

//Сложные передают ссылки
//Первый способ копирования

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

let numbers = {
    a: 2,
    b: 3,
    c: {
        x: 6,
        y:8
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;  //Рабоатеет как копия
newNumbers.c.x = 12;    //Работает как ссылка,т.к. это поверхностное копирование
                        //И объект в объекте работает как ссылка при поверхосном копировании

console.log(newNumbers);

//Второй способ копирования

const add = {
    d: 20,
    e: 35
};

console.log(Object.assign(numbers, add));   //Метод копирования. Как по мне больше похож на слияние

//Третий способ копирования

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdasda';
console.log(oldArray);
console.log(newArray);

//Четверный способ копирования 
//Пример 1

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'inst'];    //Спреад оператор

//Пример 2
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

//Пример 3

const array = ['a', 'b'];

const newarr = [...array];

const q = {
    one : 1,
    two : 2
};

const newObj = {...q};