"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; //Тоже самое что и в 10,11 строке

btns[1].style.borderRadius = '100%'; //Округление кнопки
circles[0].style.backgroundColor = 'red';

hearts.forEach(item => {                    //Меняет бэкгроунд для всех элементов
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');

// wrapper.append(div);     //Вставляет в конец элемента
// wrapper.appendChild(div);    //Устаревший вариант
// wrapper.prepend(div);       //Вставляет в начало жлемента

// hearts[0].before(div);      //До какого элемента
// hearts[1].after(div);       //После какого элемента

// wrapper.insertBefore(div, hearts[1]);    //Устаревшая версия

// circles[0].remove();     //Удаление
// wrapper.removeChild(hearts[1]);      //Устаревшая версия

// hearts[0].replaceWith(circles[0]);       //Замена элементов
// wrapper.replaceChild(circles[0], hearts[0]);     //Устаревшая версия

div.innerHTML = "<h1>Hello world</h1>";     //Вставить ХТМЛ код в элемент

// div.textContent = "<h1>Hello world</h1>";       //Вставить текст в элемент

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');       //Продвинктая вставка ХТМЛ кода в элемент
                                                            //Вместо afterend можно afterbegin, beforebegin, beforend
