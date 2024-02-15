

//--------------------------Shallow Copy------------------------------------//
const vehicleOne1 = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

const vehicleOne2= vehicleOne1;

vehicleOne2.brand='BMW';

console.log(vehicleOne2);
console.log(vehicleOne1);

/*
output:
{
  brand: 'BMW',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red'
}
{
  brand: 'BMW',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red'
}
*/
//--------------------------------------------------------------//

let oA = { id: 1, name: "shekhar", age: 21 };
let dA = oA; 
console.log(oA === dA); 
dA = { ...dA, name: "bawa" }; 
console.log(oA === dA); 
console.log(oA); 
console.log(dA); 
/*
output:

true
false
{ id: 1, name: 'shekhar', age: 21 }
{ id: 1, name: 'bawa', age: 21 }

*/
//--------------------------------------------------------------//

let oA={id:1,name:"shekhar",age:21};
let dA=oA;
console.log(dA===oA);
dA.name="bawa";
console.log(dA===oA);

/*
output:

true
true

*/
//--------------------------------------------------------------//

