"use strict";

function first(){
    //do something
    setTimeout(function(){
       console.log(1); 
    }, 500);
}

function second(){
    console.log(2); 
}

first();
second(); 

function learnJS (lang, callback){
    console.log(`Im learning: ${lang}`);
    callback();
}

//function() - анонимная функция, послевыпоолнения мы не сможем ее использовать
learnJS('Java Script', function(){
    console.log('Im finished');
});

function done(){
    console.log('Im finished');
}

learnJS('Java Script', done); //done буз скообк, потому что мы только передаем название фии, сама функция вызывается в learnJS