"use strict";

function getTimeFromMinutes(minutes) {
    if (minutes == 'string' || minutes < 0 || !Number.isInteger(minutes)) {
        console.log('Ошибка, проверьте данные');
    } else {
        if (minutes > 600) {
            console.log('Пока еще не реализованно');
        } else {
            
            if (minutes < 60) {
                console.log(`Это 0 часов и ${minutes} минут`);
            } else if (minutes === 60) {
                console.log(`Это 1 час и 0 минут`);
            } else if (minutes > 60) {
                let hours = minutes / 60,
                    ost = Math.floor(hours),
                    calcH = ost * 60,
                    calcM = minutes - calcH;
                if (ost === 1) {
                    console.log(`Это ${ost} час и ${calcM} минут`);
                } else if (ost > 1 && ost < 5) {
                    console.log(`Это ${ost} часа и ${calcM} минут`);
                }else if (ost > 4 && ost < 11) {
                    console.log(`Это ${ost} часов и ${calcM} минут`);
                }

            } else if (minutes === 0) {
                console.log(`Это ${minutes} час и ${minutes} минут`);
            }
        }
    }
}

getTimeFromMinutes(150);
getTimeFromMinutes(50);
getTimeFromMinutes(0);
getTimeFromMinutes(-150);

function findMaxNumber(a,b,c,d) {
    if (typeof(a) == 'string' || typeof(b) == 'string' || typeof(c) == 'string' || typeof(d) == 'string') {
        console.log(0);
    } else {
        console.log(Math.max(a, b ,c, d));
    }
}

findMaxNumber(1, 5, 6.6, 11);
findMaxNumber(1, 5, '6', '10');

//Вроде правильно работает
//Но верное решение это

function confirm(a,b,c,d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        console.log(0);
    } else {
        console.log(Math.max(a, b ,c, d));
    }
}

confirm(1, 5, 6.6, 11);
confirm(1, 5, '6', '10');