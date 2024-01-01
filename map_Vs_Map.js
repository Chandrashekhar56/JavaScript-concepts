//map is a function for manipulating arrays
const str=[1,2,3,4,5,6,7];
const result=str.map((item,index)=> item=item*2);
console.log(result);

/*
output:

[
   2,  4,  6, 8,
  10, 12, 14
]
*/


//Map is an object for storing key-value pairs in a more structured way.
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
console.log(myMap);
console.log(myMap.get('key1')); 
console.log(myMap.get('key2')); 

/*
output:

Map(2) { 'key1' => 'value1', 'key2' => 'value2' }
value1
value2
*/
