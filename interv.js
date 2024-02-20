let arr=[
    {name:"shekhar",age:24},
    {name:"sachin",age:22},
    {name:"vivek",age:24},
    {name:"shekhar",age:24},
    {name:"vijay",age:25},
    {name:"shivam",age:22},
    {name:"vivek",age:24},
    {name:"mohit",age:23}
];
const count={};
// count[arr[0].age]=20;
arr.forEach((item) => {
    if (count[item.age]) {
        ++count[item.age];
    } else {
        count[item.age] = 1;
    }
});
console.log(count);
console.log(arr);


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
