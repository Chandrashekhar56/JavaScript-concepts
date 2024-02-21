//=======================================================================================================================================================================================//
const numbers = [
    {name:"baba",age:1},
    {name:"babe",age: 5},
    {name:"barfani",age: 2},
    {name:"huka",age: 3},
    {name:"chilam",age: 4},
    ];
const max = numbers.reduce((accumulator, currentValue) => {
    if (currentValue.age > accumulator.age) {
        return currentValue;
    } else {
        return accumulator;
    }
}, numbers[0]);

console.log(max);
/*
output:
{ name: 'babe', age: 5 }
*/
//=======================================================================================================================================================================================//
