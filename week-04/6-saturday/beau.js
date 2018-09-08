"use strict"

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

const map2 = map(array1, x => x * 2); 

console.log(map1);
// expected output: Array [2, 8, 18, 32]
console.log(map2);
// expected output: Array [2, 8, 18, 32]

function map(array, func) {
    const result = [];
    array.forEach( element => {
        result.push(func(element));
    });
    return result;
}