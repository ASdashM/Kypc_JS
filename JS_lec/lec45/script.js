'use strict';

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // e.target.remove();
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
}, {once: true}); //Используется один раз
