"use strict";

const arr = [1,2,3,6,8];
arr.sort();

//функция для сортировки массива чисел в браузере
//
function compareNum(a, b){
    return a-b;
}
console.log(arr); 

console.log(arr.length);

arr.pop(); //delete last element
console.log(arr); 

arr.push(10); // add new element to the end of array
console.log(arr); 

//вывод массива
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//or this:
for (let value of arr){
    console.log(value);
}
//or this:
arr.forEach(function(item, i, arr){ //callback function
    console.log(`${i}: ${item} inside massive ${arr}`);
});

//
const str = prompt("", "");
const product = str.split(", ");
product.sort();
console.log(product.join(';'));
