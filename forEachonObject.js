let ob={
    person1:{
     name:"shekhar",
     age: 24,
    },
  person2:{
        name:"sachin",
        age:24,
    },
    person3:{
     name:"shekhar",
     age: 24,
    },
  person4:{
        name:"sachin",
        age:24,
    },
};
let obArray = Object.values(ob);
obArray.forEach((item)=>console.log(item));
