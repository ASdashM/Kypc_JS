"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let s = 0,
        v = 0;
    data.shops.forEach(shop => {
        s += shop.width * shop.length;

    });

    v += data.height * s;

    if (data.budget - (data.moneyPer1m3 * v) <= 0) {
        console.log('Бюджета достаточно');
    
    } else {
        console.log('Бюджета недостаточно');
    }
}

isBudgetEnough(shoppingMallData);