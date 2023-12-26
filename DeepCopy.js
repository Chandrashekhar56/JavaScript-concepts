
//=======================================================Deep Copy========================================================//
const vehicleOne1 = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

const vehicleOne2 = JSON.parse(JSON.stringify(vehicleOne1));

vehicleOne2.brand = 'BMW';

console.log("vehicleOne2: ",vehicleOne2);
console.log("vehicleOne1: ",vehicleOne1);

/*
    output:
vehicleOne2:  {
  brand: 'BMW',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red'
}
vehicleOne1:  {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red'
}
*/

//=======================================================Deep Copy========================================================//

function deepClone(obj) 
{
  return JSON.parse(JSON.stringify(obj));
}

const originalObject ={
  name: "John",
  age: 25,
  address: {
    city: "New York",
    country: "USA"
  }
};
const clonedObject = deepClone(originalObject);
clonedObject.name='shekhar';
console.log("cloned Object: ",clonedObject );
console.log("original Object: ",originalObject);
/*
    output:
cloned Object:  {
  name: 'shekhar',
  age: 25,
  address: { city: 'New York', country: 'USA' }
}
original Object:  {
  name: 'John',
  age: 25,
  address: { city: 'New York', country: 'USA' }
}
*/
//=======================================================Deep Copy========================================================//
