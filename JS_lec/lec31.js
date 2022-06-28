"use strict";

//callback функции

function lernJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log("Done");
}

lernJS("JS", done);