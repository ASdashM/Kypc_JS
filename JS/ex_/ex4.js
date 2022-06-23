"use strict";

//Первая задача

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
let len = arr.length;

for(let i1 = len - 1; i1 > -1; i1--){
    result[i1] = arr[i1];
}
console.log(result);

//Вторая задача

const data = [5, 10, 'Shopping', 20, 'Homework'];
let len2 = data.length;

for(let i2 = 0; i2 <= len2; i2++){
    let tp = typeof(data[i2]);
    if(tp == 'number'){
        data[i2] = data[i2] * 2;

    } else if(tp == 'string'){
        data[i2] = data[i2] + ' - done';
    }
}
console.log(data);

//Третья задача

const data3 = [5, 10, 'Shopping', 20, 'Homework'];
const result3 = [];
let len3 = data3.length;

for(let i3 = 1; i3 <= len3; i3++){
    result3[i3 - 1] = data3[len3 - i3];
}
console.log(result3);