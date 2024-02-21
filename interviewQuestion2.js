//======================================================================================================================================//

const arr = [
    {name: "shekhar", age: 24},
    {name: "sachin", age: 22},
    {name: "vivek", age: 24},
    {name: "shekhar", age: 24},
    {name: "vijay", age: 25},
    {name: "shivam", age: 22},
    {name: "vivek", age: 24},
    {name: "mohit", age: 23},
];
let count={};
arr.forEach((item,index)=>
{
    const {age}=item;
    if(!count[age]){
        count[age]=[];
    }
    count[age].push({ ...item});
});
console.log(count);

/*
output:

{
  '22': [ { name: 'sachin', age: 22 }, { name: 'shivam', age: 22 } ],
  '23': [ { name: 'mohit', age: 23 } ],
  '24': [
    { name: 'shekhar', age: 24 },
    { name: 'vivek', age: 24 },
    { name: 'shekhar', age: 24 },
    { name: 'vivek', age: 24 }
  ],
  '25': [ { name: 'vijay', age: 25 } ]
}

*/
//=====================================================================================================================================//

count={};
arr.forEach((item,index)=>
{
    if(count[item?.age]){
        count[item?.age]++;
    }
    else{
        count[item.age]=1;
    }
});
console.log(count);

/*
output:

{ '22': 2, '23': 1, '24': 4, '25': 1 }

*/
//=====================================================================================================================================//
