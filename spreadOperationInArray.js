let ob = [
  person1 = {
    name: "shekhar1",
    age: 24,
  },
  person2 = {
    name: "sachin1",
    age: 24,
  },
  person3 = {
    name: "shekhar2",
    age: 24,
  },
  person4 = {
    name: "sachin2",
    age: 24,
  },
];

console.log(ob);
console.log("//-------------------------------------------//");

let ob1 = ob.person1={ ...ob.person1 }; 
console.log(ob1);
console.log("//-------------------------------------------//");

let ob2 = [person1 = { ...ob.person1 }, ...ob];
console.log(ob2);
console.log("//-------------------------------------------//");

let ob3 = [...ob,  person1={ ...ob.person1, name:'krishna', age: 23 }]; 
console.log(ob3);
console.log("//-------------------------------------------//");

let ob4 = [...ob];
console.log(ob4);
console.log("//-------------------------------------------//");

ob.map((item,index)=>console.log(index,item));
console.log("//-------------------------------------------//");

/*
node /tmp/HTPrTbmTZK.js
[
  { name: 'shekhar1', age: 24 },
  { name: 'sachin1', age: 24 },
  { name: 'shekhar2', age: 24 },
  { name: 'sachin2', age: 24 }
]
//-------------------------------------------//
{}
//-------------------------------------------//
[
  {},
  { name: 'shekhar1', age: 24 },
  { name: 'sachin1', age: 24 },
  { name: 'shekhar2', age: 24 },
  { name: 'sachin2', age: 24 }
]
//-------------------------------------------//
[
  { name: 'shekhar1', age: 24 },
  { name: 'sachin1', age: 24 },
  { name: 'shekhar2', age: 24 },
  { name: 'sachin2', age: 24 },
  { name: 'krishna', age: 23 }
]
//-------------------------------------------//
[
  { name: 'shekhar1', age: 24 },
  { name: 'sachin1', age: 24 },
  { name: 'shekhar2', age: 24 },
  { name: 'sachin2', age: 24 }
]
//-------------------------------------------//
0 { name: 'shekhar1', age: 24 }
1 { name: 'sachin1', age: 24 }
2 { name: 'shekhar2', age: 24 }
3 { name: 'sachin2', age: 24 }
//-------------------------------------------//
*/
