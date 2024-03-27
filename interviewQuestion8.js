
//==========================================================================================================================================================================//
const dataArray = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Doe", age: 40 },
  { id: 4, name: "Alice", age: 25 },
  { id: 5, name: "Bob", age: 28 },
  { id: 6, name: "Eve", age: 40 },
];
let data = {};
dataArray.map((item) => {
    if (!data[item.age]) {
        data[item.age] =[];
    }
    data[item.age].push(item);
});

console.log(data);
/******************
output:
{
  '25': [
    { id: 2, name: 'Jane', age: 25 },
    { id: 4, name: 'Alice', age: 25 }
  ],
  '28': [ { id: 5, name: 'Bob', age: 28 } ],
  '30': [ { id: 1, name: 'John', age: 30 } ],
  '40': [ { id: 3, name: 'Doe', age: 40 }, { id: 6, name: 'Eve', age: 40 } ]
}
******************/

//==========================================================================================================================================================================//
const dataArray = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Doe", age: 40 },
  { id: 4, name: "Alice", age: 25 },
  { id: 5, name: "Bob", age: 28 },
  { id: 6, name: "Eve", age: 40 },
];

let data = {};
dataArray.map((item) => {
    if (!data[item.age]) {
        data[item.age] = {};
    }
    data[item.age][item.id] = item; 
});

console.log(data);

/******************
output:
{
  '25': {
    '2': { id: 2, name: 'Jane', age: 25 },
    '4': { id: 4, name: 'Alice', age: 25 }
  },
  '28': { '5': { id: 5, name: 'Bob', age: 28 } },
  '30': { '1': { id: 1, name: 'John', age: 30 } },
  '40': {
    '3': { id: 3, name: 'Doe', age: 40 },
    '6': { id: 6, name: 'Eve', age: 40 }
  }
}
******************/
//==========================================================================================================================================================================//
const data = {
  1: { name: "John", age: 30 },
  2: { name: "Jane", age: 25 },
  3: { name: "Doe", age: 40 },
  4: { name: "Alice", age: 25 },
  5: { name: "Bob", age: 28 },
  6: { name: "Eve", age: 40 },
};

let arr ={};
Object.values(data).forEach((item,key) => {
    if (!arr[item.age]) {
        arr[item.age] = [];
    }
    arr[item.age].push(item);
});

console.log(arr);
/******************
output:
{
  '25': [ { name: 'Jane', age: 25 }, { name: 'Alice', age: 25 } ],
  '28': [ { name: 'Bob', age: 28 } ],
  '30': [ { name: 'John', age: 30 } ],
  '40': [ { name: 'Doe', age: 40 }, { name: 'Eve', age: 40 } ]
}
******************/
//==========================================================================================================================================================================//
/******************
output:
******************/
//==========================================================================================================================================================================//
