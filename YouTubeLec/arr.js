'use strict';

let arr = ['a', 'b', 'c','d'];

//Метод push 

console.log('Метод push\n');

arr.push('d');  //Добавляет элемент в конец массива  
console.log(arr);

console.log('');

//Метод shift

console.log('Метод shift\n');

arr.shift('1'); //Удаляет элемент в начале, сдвигая имеющиеся на единицу 
console.log(arr);

console.log('');

//Метод pop

console.log('Метод pop\n');

arr.pop();  //Удаляет элемент в конце массива
console.log(arr);

console.log('');

//Метод unshift 

console.log('Метод unshift\n');

arr.unshift('a');   //Добавляет элемент в начало массива, сдвигая имеющиеся на едииницу
console.log(arr);

console.log('');

//Метод splice
//Позволяет добавлять, удалять, изменять элементы

console.log('Метод splice\n');

console.log('==Удаляем элемент==\n');

let arr1 = ['a', 'b', 'c','d'];
arr1.splice(1, 1); //Начиная с первой единицы удаляем один элемент
console.log(arr1);

console.log('==Удаляем элемент и возвращаем его в переменную==\n');

let arr2 = ['a', 'b', 'c', 'd'];
let removed = arr2.splice(1, 1);
console.log(removed);

console.log('');

console.log('==Заменяем элемент==\n');

let arr3 = ['a', 'b', 'c', 'd'];
arr3.splice(0, 1, 'aa');    //Начиная с нулевой позиции заменяем один элемент
console.log(arr3);

console.log('');

console.log('==Добавляем элемент==\n');

let arr4 = ['a', 'b', 'c', 'd'];
arr4.splice(1, 0, 'bb');    //Начиная с первой позиции добавляем один элемент \ Ноль в скобках значит что добавояем эл.
console.log(arr4);

console.log('');

console.log('==Удаляем элемент с конца==\n');

let arr5 = ['a', 'b', 'c', 'd'];
arr5.splice(-1, 1); //Начиная с конца удаляем один элемент
console.log(arr5);

console.log('');

//Метод splice 
//Создает новый массив, копируя туда часть или весь массив

console.log('Метод splice');

console.log('==Копируем часть массива==\n');

let arr6 = ['a', 'b', 'c', 'd'];
let arrCop6 = arr6.slice(1, 2);    //Начина с первой позиции до второй (Не включая)
console.log(arrCop6);

console.log('');

let arrCop66 = arr6.slice(-2, -1);     //Начиная с предпоследней до последней(Не включая)
console.log(arrCop66);

console.log('');

console.log('==Копируем весь массив==\n');

let arrCop666 = arr6.slice();
console.log(arrCop666);

console.log('');

//Метод concat
//Создает новый массив, в который копирует данные из других массивов и доп. значения

console.log('Метод concat\n');

let arr7 = ['a', 'b', 'c', 'd'];
let arrCop7 = arr7.concat('dd');
console.log(arrCop7);

console.log('');

//Методы indexof, lastindexOf,includes
/*
1.indexOf(item, from) - Ищет item начиная с индекса from, и возвращает индекс найденого эл.
В противном случае возвращает -1
2.lastindexOf -Тоже самое, но ищет с концп в начало
3.includes(item, from) - Ищет item начиная с индекса from, и возвращает true если поиск успешен
*/

console.log('Метод indexOf, lastIndexOf, includes');

let arr8 = ['a', 'b', 'c', 'd'];
console.log(arr8.indexOf('a'));
console.log(arr8.indexOf('c'));
console.log(arr8.indexOf('aa'));
console.log(arr8.includes('b'));
console.log(arr8.includes('bb'));

console.log('');

//Метод find  и findIndex
/*
Поиск в массиве объектов с определенным условием
*/

console.log('Метод find и findIndex');

let arr9 = [{name: 'a', age: 1},
            {name: 'b', age: 2},
            {name: 'c', age: 3},
            {name: 'd', age: 4}];

let result9 = arr9.find(function (item, index, array){
    return item.age === 3;
});
console.log(result9);

console.log('');

//Или так

let result99 = arr9.find(item => item.age === 2);
console.log(result99);

console.log('');

let result999 = arr9.findIndex(item => item.age === 2);
console.log(result999);

console.log('');

//Метод sort
//Сортирует массив

console.log('Метод sort');

let arr10 = ['b', 'c', 'a', 'd'];
console.log(arr10.sort());

console.log('');

let arr11 = [1, 4, 22, 2, 44]; 
console.log(arr11.sort()); //на числа применяется лексикографический порядок

//функция сортировки по числовому порядку

function compareNumeric (a, b) {
    console.log(`Сравниваем ${a} и ${b}`);
    if (a > b) {
        return 1;
    }
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
}

console.log(arr11.sort(compareNumeric));

console.log('');

// Или можно так

console.log(arr11.sort((a, b) => a - b));

console.log('');

//Метод revers
//Меняет порядок в массиве на обратный

console.log('Метод revers');

let arr12 = ['a', 'b', 'c', 'd'];
console.log(arr12.reverse());

console.log('');

//Метод map
//Вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции

console.log('Метод map');

let arr13 = ['As', 'Bs', 'Cs', 'Ds'];
let result13 = arr13.map(function (item, index, array){
    return item[0];
});
 console.log(result13);

 console.log('');


 //Или так

 console.log(arr13.map(item => item[0]));

 console.log('');

 //Метод split и join
 /*
 1. split преобразует строку в массив по заданному разделителю 
 2. join преобразует массив в строку с заданным разделителем
 */

console.log('Метод map и join ');

let str14 = 'a, b, c, d';
let arr14 = str14.split(', ');
console.log(arr14);

console.log('');

//И обратно

let agStr14 = arr14.join(', ');
console.log(agStr14);

 console.log('');

 // for ... of
 //Переборр значений

 let arr15 = ['a', 'b', 'c', 'd'];

 for (let item of arr15){
    console.log(item);
 }

//Метод forEach
// Выполняет функцию для каждого жлемента

console.log('Метод forEach');


let arr16 = ['a', 'b', 'c', 'd'];

arr16.forEach(function (item, index, array){
    console.log(`${item} находится на ${index} позиции в ${array}`);
});

console.log('');

//Или так

arr16.forEach((item, index, array) => {
    console.log(`${item} находится на ${index} позиции в ${array}`);
});

console.log('');
