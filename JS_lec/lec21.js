//Что выведет в консоль код?

console.log( NaN || 2 || undefined ); // 2
console.log( NaN && 2 && undefined ); // Nan
console.log( 1 && 2 && 3 ); // 3
console.log( !1 && 2 || !3 ); // false
console.log( 25 || null && !3 ); // 25
console.log( NaN || null || !3 || undefined || 5); // 5
console.log( NaN || null && !3 && undefined || 5); // 5
console.log( 5 === 5 && 3 > 1 || 5); // true

//Выполняется ли условие? //Да

const hamburger1 = 3;
const fries1 = 3;
const cola1 = 0;
const nuggets1 = 2;
 
if (hamburger1 === 3 && cola1 || fries1 === 3 && nuggets1) {
   console.log('Done!');
} 

//Выполняется ли условие? //Да

let hamburger2;
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;
 
if (hamburger2 || cola2 || fries2 === 3 || nuggets2) {
   console.log('Done!');
}

//Выполняется ли условие? //Нет

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}
