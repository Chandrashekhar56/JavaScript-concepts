let ob={
    person1:{
     name:"shekhar1",
     age: 24,
    },
  person2:{
        name:"sachin1",
        age:24,
    },
    person3:{
     name:"shekhar2",
     age: 24,
    },
  person4:{
        name:"sachin2",
        age:24,
    },
};
console.log(ob);

// let ob1={...{person1:{...ob.person1}}};
let ob1={person1:{...ob.person1}};
console.log(ob1);

let ob2={person1:{...ob.person1},...ob};
console.log(ob2);

let ob3={...ob, person1:{...ob.person1,name:"krishna"}};
console.log(ob3);

let ob4={...ob};
console.log(ob4);

/*{
  person1: { name: 'shekhar1', age: 24 },
  person2: { name: 'sachin1', age: 24 },
  person3: { name: 'shekhar2', age: 24 },
  person4: { name: 'sachin2', age: 24 }
}
//-------------------------------------------//
{ person1: { name: 'shekhar1', age: 24 } }
//-------------------------------------------//
{
  person1: { name: 'shekhar1', age: 24 },
  person2: { name: 'sachin1', age: 24 },
  person3: { name: 'shekhar2', age: 24 },
  person4: { name: 'sachin2', age: 24 }
}
//-------------------------------------------//
{
  person1: { name: 'krishna', age: 24 },
  person2: { name: 'sachin1', age: 24 },
  person3: { name: 'shekhar2', age: 24 },
  person4: { name: 'sachin2', age: 24 }
}
//-------------------------------------------//
{
  person1: { name: 'shekhar1', age: 24 },
  person2: { name: 'sachin1', age: 24 },
  person3: { name: 'shekhar2', age: 24 },
  person4: { name: 'sachin2', age: 24 }
}
//-------------------------------------------//
*/
