
//------------------Spread Operator-------------------------------//
const myprop1={prop1:'value1'};
const myprop2={prop2:'value2'};
const my={...myprop1 , ...myprop2};
child1(my);

function child1(my)
{ 
  console.log(my);
  console.log(my.prop1);
  console.log(my.prop2);
}

console.log(" ");
//-------------------------------------------------//
const myprop3={prop3:'value3',prop4:'value4'};
child2({...myprop3});

function child2(myprop3)
{
  console.log(myprop3);
  console.log(myprop3.prop3);
  console.log(myprop3.prop4);
}
