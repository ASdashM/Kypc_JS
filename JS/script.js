"use strict";
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания
//-------------------------------------------------------------------------

let numbetOfFilms;

let personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        numbetOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numbetOfFilms == '' || numbetOfFilms == null || isNaN(numbetOfFilms)) {
        numbetOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++){
            const a = prompt("Один из последних посмотренных фильмов", ''),
                b = prompt("На сколько оцените его?", '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    showMyDB() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (genre != null && genre != '' && genre.length < 50) {
            personalMovieDB.genres[i -1] = genre;      
            }        
        } 
        personalMovieDB.genres.forEach(function(item, j){
            j += 1;
            console.log(`Любимый жанр №${j} - это ${item}`);
        });  
    },
    toogleVisibleMyDB() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.writeYourGenres();
