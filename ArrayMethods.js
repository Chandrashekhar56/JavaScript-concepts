//=============================================================(push)===================================================================================================//

const fruits = ['apple', 'banana'];
fruits.push('orange', 'grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']

//==============================================================(pop)================================================================================================//

const removedFruit1 = fruits.pop();
console.log(removedFruit1); // 'grape'
console.log(fruits); // ['apple', 'banana', 'orange']

//==============================================================(shift)==============================================================================================//

const removedFruit2 = fruits.shift();
console.log(removedFruit2); // 'apple'
console.log(fruits); // ['banana', 'orange']

//================================================================(unshift)===================================================================================================//

const addFruit1 = fruits.unshift('apple', 'grape');
console.log(addFruit1); // 4
console.log(fruits); // ['apple', 'grape','banana', 'orange']

//================================================================(concat)================================================================================================//''

const moreFruits = ['mango', 'guva'];
const combined = fruits.concat(moreFruits);
console.log(fruits);// [ 'apple', 'grape', 'banana', 'orange' ]
console.log(combined); // ['apple', 'banana', 'orange', 'grape','mango', 'guva']

//====================================================================(slice)============================================================================================//

const slicedFruits1 = combined.slice(1, 3);
console.log(slicedFruits1); // [ 'grape', 'banana' ]
console.log(combined);// [ 'apple', 'grape', 'banana', 'orange', 'mango', 'guva' ]

//====================================================================(splice)============================================================================================//

const slicedFruits2 = combined.splice(1, 3);
console.log(slicedFruits2); //[ 'grape', 'banana', 'orange' ]
console.log(combined);//[ 'apple', 'mango', 'guva' ]

//==============================================================(forEach)==================================================================================================//

fruits.forEach((fruits)=>{
    console.log(fruits);
});
// apple 
// grape 
// banana 
//orange

//==================================================================(map)==============================================================================================//

fruits.map((item,index)=>{
    console.log(index," : ",item);
}); 
// 0  :  apple 
// 1  :  grape 
// 2  :  banana 
// 3  :  orange

//==================================================================(startsWith)==============================================================================================//

const filteredFruits = fruits.filter((fruit) => fruit.startsWith('a'));
console.log(filteredFruits); //[ 'apple' ]






