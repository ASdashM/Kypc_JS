"use strict";

// Сапрашивают на собесах

function fib(a) {
    if (typeof(a) == 'string' || a == 0 || !Number.isInteger(a)){
        console.log('""');
    } else {
        let first = 0,
            second = 1,
            res = '';
        for (let i = 0; i < a; i++) {
            if (i + 1 === a) {
                res += `${first}`;
            } else {
                res += `${first} `;
            }
            let third = second + first;
            first = second;
            second = third;
        }
    console.log(res);
    }
}

fib(4);
fib(7);
fib('7');
fib(0);
