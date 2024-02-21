//======================================================================================================================================//

const arr = [
    {name: "shekhar", age: 24},
    {name: "sachin", age: 22},
    {name: "vivek", age: 24},
    {name: "shekhar", age: 24},
    {name: "vijay", age: 25},
    {name: "shivam", age: 22},
    {name: "vivek", age: 24},
    {name: "mohit", age: 23}
];
let age24,age22,age23,age25;
for(let i=0;i<arr.length;i++)
{
    if(arr[i].age===24)
        age24={...age24,[i]:arr[i]}
    if(arr[i].age===22)
        age22={...age22,[i]:arr[i]}
    if(arr[i].age===23)
        age23={...age23,[i]:arr[i]}
    if(arr[i].age===25)
        age25={...age25,[i]:arr[i]}
}
console.log(age24);
console.log(age22);
console.log(age23);
console.log(age25);

/*
output:

{
  '0': { name: 'shekhar', age: 24 },
  '2': { name: 'vivek', age: 24 },
  '3': { name: 'shekhar', age: 24 },
  '6': { name: 'vivek', age: 24 }
}
{ '1': { name: 'sachin', age: 22 }, '5': { name: 'shivam', age: 22 } }
{ '7': { name: 'mohit', age: 23 } }
{ '4': { name: 'vijay', age: 25 } }

*/
//======================================================================================================================================//

const arr = [
    {name: "shekhar", age: 24},
    {name: "sachin", age: 22},
    {name: "vivek", age: 24},
    {name: "shekhar", age: 24},
    {name: "vijay", age: 25},
    {name: "shivam", age: 22},
    {name: "vivek", age: 24},
    {name: "mohit", age: 23}
];
const ageGroups = {};
for (let i = 0; i < arr.length; i++) {
    const age = arr[i].age;
    if (!ageGroups[age]) {
        ageGroups[age] = [];
    }
    ageGroups[age].push({index: i, ...arr[i]});
}

console.log(ageGroups[24]); 
console.log(ageGroups[22]); 
console.log(ageGroups[23]); 
console.log(ageGroups[25]); 

/*
output:

[
  { index: 0, name: 'shekhar', age: 24 },
  { index: 2, name: 'vivek', age: 24 },
  { index: 3, name: 'shekhar', age: 24 },
  { index: 6, name: 'vivek', age: 24 }
]
[
  { index: 1, name: 'sachin', age: 22 },
  { index: 5, name: 'shivam', age: 22 }
]
[ { index: 7, name: 'mohit', age: 23 } ]
[ { index: 4, name: 'vijay', age: 25 } ]


*/
//======================================================================================================================================//
