"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
    arr.forEach(member => {
        str += `${member} `;
    });
    console.log(str);
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';
    arr.forEach(item => {
        str = item;
        console.log(str.toLowerCase());
    });
}

standardizeStrings(favoriteCities);