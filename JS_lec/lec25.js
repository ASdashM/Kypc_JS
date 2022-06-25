"use strict";

//functiom declaration

function declarationFunction(a , b) {
    return (a + b);
}

console.log(declarationFunction(2, 3));

// function expression

let expressiomFunction = function(a, b) {
    return (a * b);
};

console.log(expressiomFunction(2, 2));

//Стрелочная функция

let arrowFunction = (a, b) => {
    return (a / b);
};

console.log(arrowFunction(10, 2));