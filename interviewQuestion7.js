
//========================================================================================================================================//

const numbers = [
    { name: "baba", age: 1 },
    { name: "babe", age: 5 },
    { name: "barfani", age:7},
    { name: "huka", age: 3 },
    { name: "chilam", age: 4 },
];
const { min, max } = numbers.reduce((acc, curr) => {
    return {
        min: curr.age < acc.min.age ? curr : acc.min,
        max: curr.age > acc.max.age ? curr : acc.max,
    };
}, { min: numbers[0], max: numbers[0] });

console.log("Smallest Age:", min.age);
console.log("Greatest Age:", max.age);

/*
Ouput:

Smallest Age: 1
Greatest Age: 7

*/
//========================================================================================================================================//
