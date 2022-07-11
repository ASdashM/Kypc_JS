'use strict';

// To string

// 1)

console.log(typeof(String(4)));

// 2)

console.log(typeof(4 + '')); //конкатенация

// 3)

let k = 4;

console.log(typeof(`las ${k}`));

// To number

// 1) 

console.log(typeof(Number('2')));

// 2) 

console.log(typeof(+'sd'));

// 3)

console.log(typeof(parseInt('s', 10)));

// To boolean

// 0, '', null, undefind, NaN - Возвращают False

// 1)

let s = 0;

if (s) {
    console.log('0');
}

s = 1;

if (s) {
    console.log('1');
}

// 2)

console.log(typeof(Boolean(null)));

// 3)

console.log(typeof(!!'2'));