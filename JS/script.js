"use strickt";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let q1 = prompt("Один из последних посмотренных фильмов?",''),
    q2 = prompt("На сколько оцените его?", ''),
    q3 = prompt("Один из последних посмотренных фильмов?",''),
    q4 = prompt("На сколько оцените его?", '');

personalMovieDB.movies[q1] = q2;
personalMovieDB.movies[q3] = q4;

console.log(personalMovieDB);