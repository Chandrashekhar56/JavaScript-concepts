//=====================================================================================================================================//

const numbers = [1, 2, 3, 4, 5];
const max = numbers.reduce((accumulator, currentValue) => {
    // console.log(accumulator, currentValue);
  return currentValue > accumulator ? currentValue : accumulator;
}, numbers[0]); 
console.log(max);
/*
output:
5

*/
//=====================================================================================================================================//

const numbers = [1, 2, 3, 4, 5];
const max = numbers.reduce((accumulator, currentValue) => {
    if (currentValue > accumulator) {
        return currentValue;
    } else {
        return accumulator;
    }
}, numbers[0]);

console.log(max);

/*
output:
5

*/
//=====================================================================================================================================//

const numbers = [1, 2, 3, 4, 5];
let max=numbers[0];
const sumOfEvenNumbers = numbers.reduce((accumulator, currentValue) =>{
    if(currentValue>max)
    {
        max=currentValue;
    }
}, 0);
console.log(max);

/*
output:
5

*/
//=====================================================================================================================================//
