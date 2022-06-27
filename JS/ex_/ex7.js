"use strict";

// V = a^3
// S =6 a^2

function calculateVolumeAndAreaa (a) {
    
    if (typeof(a) !== 'number' || a < 0 || !Number.isInteger(a)) {
        
        console.log('При вычислении произошла ошибка');
    } else {
        let volume = Math.pow(a, 3),
            area = 6 * Math.pow(a,2);
            
            return(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
    }
}



calculateVolumeAndAreaa(5);
calculateVolumeAndAreaa(15);
calculateVolumeAndAreaa(15.5);
calculateVolumeAndAreaa('15');
calculateVolumeAndAreaa(-15);

function getCoupeNumber(number) {
    if (number == 'string' || number < 0 || !Number.isInteger(number)) {
        console.log('Ошибка. Проверьте правильность введенного номера места');
    } else if (number === 0 || number > 36) {
        console.log("Таких мест в вагоне не существует");
    } else {
        for (let i = 4; i <= 36; i = i + 4) {
            if (number <= i) {
                return Math.ceil(i / 4);
            }
        }
    }
}

getCoupeNumber(33);
getCoupeNumber(7);
getCoupeNumber(300);
getCoupeNumber(0);
getCoupeNumber(7.7);
getCoupeNumber(-10);
getCoupeNumber('hello');


