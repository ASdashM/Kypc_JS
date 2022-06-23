"use strict";

//Задача первая

for(let i1 = 5; i1 < 11; i1++){
    console.log(i1);
}

//Задача вторая

for(let i2 = 20; i2 > 10; i2--){
    console.log(i2);
    if(i2 === 13){
        break;
    }
}

//Задаача третья

for(let i3 = 2; i3 < 11; i3++) {
    if(i3 % 2 == 0){
        console.log(i3);
    } else {
        continue;
    }
}

//Задача четвертая

let i4 = 2;

while (i4 <= 16){
    
    if(i4 % 2 === 0){
        i4++;
        continue;
    } else {
        console.log(i4);
        i4++;
    }
    i4++;
}

// for(let i4 = 2; i4 <= 16; i4++){
//     if(i4 % 2 === 0) {
//         continue;
//     } else {
//         console.log(i4);
//     }
// }

//Задача пятая

let m = [];

for(let i5 = 5; i5 < 11; i5++){
    m[i5 - 5] = i5;
}
console.log(m);