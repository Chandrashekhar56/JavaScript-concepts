

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
//--------------------------------------------------------------//
