"use strict";

const MyText = 'Hello world!!!';

//function declaration
function showFirstMessage(text){
    console.log('Add this: ' + text);
  
}

showFirstMessage(MyText);

//function expression
const logger = function() {
    console.log('Hello');
};

logger();

//стрелочная функция
const calc = (a,b) => a+b;
const calc2  = (a,b) => {return a+b;};