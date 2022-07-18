"use strict";

console.log('Задача 1\n');

let x1 = 5;
console.log(x++);   //Результат будет 5, еслибы инкримент стоял перед переменной результат был бы 6

console.log('Задача 2\n');

console.log([] + false - null + true); //Пустой массив в данном случае будет пустой строкой
//Пустая строка + false = false
//false - null = NaN
//NaN + true = NaN

console.log('Задача 3\n');

let y = 1;
let x = y = 2;
console.log(x); // 2

console.log('Задача 4\n');

console.log([] + 1 + 2); // 12

console.log('Задача 5\n');

console.log("1"[0]); //К срокам по индексу тоже можно обращаться

console.log('Задача 6\n');

console.log(2 && 1 && null && 0 && undefined);  //null
//И запинается на ЛЖИ

console.log('Задача 7\n');

console.log(!!(1 && 2) == (1 && 2)); // !! возвращаюи булевское значение, поэтому результат false

console.log('Задача 8\n');

console.log(null || 2 && 3 || 4); //Сначала выполняется && потом ||
//ИЛИ запинается на правде

console.log('Задача 9\n');

const a = [1, 2, 3],
      b = [1, 2, 3];

console.log(a == b);    // Результат false т.к. переменные разные хоть и содержимое одинаковое

console.log('Задача 9\n');

console.log(+'Infinity');   //infinity Также это будет число

console.log('Задача 10\n');

console.log('Ежик' > 'яблоко'); //false (Нужно смотреть по юникоду)

console.log('Задача 11\n');

console.log(0 || '' || 2 || undefined || true || false);    //2
//ИЛИ запинается на правде

