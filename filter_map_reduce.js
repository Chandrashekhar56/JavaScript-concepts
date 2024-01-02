
//======================================================================================================================//

const numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num )=> num % 2 === 0);
console.log(evenNumbers);

const sum1=numbers.reduce((acc,curr)=>{return curr+1},0);
console.log("sum: ",sum1);

const sum2=numbers.map((item,index)=>{return item+1});
console.log(sum2);

const sum2=[]
numbers.forEach((item,index)=>{sum2.push(item+1)});
console.log(sum2);

/*
output:

[ 0, 2, 4, 6, 8, 10 ]

sum:  11

[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]

[  1, 2, 3, 4,  5,  6, 7, 8, 9, 10,  11  ]

*/

//======================================================================================================================//
