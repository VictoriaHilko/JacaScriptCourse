"use strict";
//1
const num = 50;

if(num < 49){
    console.log('Less');
} else if (num > 100){
    console.log('More');
} else {
    console.log('Ok');
    }

(num == 50) ? console.log('Ok') : console.log('Error');

//2

const count = 19;

switch(count){
    case 5:
        console.log('Less');
        break;
    case 10:
        console.log('OK');
        break;  
    case 15:
        console.log('More');
        break;   
    default:
        console.log('Ne srabotalo ni odno iz usloviy');
        break;   
}