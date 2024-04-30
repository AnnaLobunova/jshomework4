'use strict';

//Problem 1
// const currentMaxValue = 4589;
// let reverseMaxValue = Number(String(currentMaxValue).split('').reverse().join(''));

// console.log(reverseMaxValue);
// console.log(typeof reverseMaxValue);

//Problem 2

const resultsArray = [5, 2, [3, [4]]];

function productCalc(arr){
    let product = 1;
    for(let i=0; i<arr.length; i++){
        if (Array.isArray(arr[i])){
            product *= productCalc(arr[i]);
        }
        else {
            product *=arr[i];
        }
        
    }
    return product
}
let productOfArray = productCalc(resultsArray);

console.log(productOfArray); // 24