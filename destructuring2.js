
//--------------------------destructuring ------------------------------------//
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myvehicle(vehicleOne);

function myvehicle(vehicleOne)
{
  console.log('My ' + vehicleOne.type + ' is a ' + vehicleOne.color + ' ' 
  + vehicleOne.brand + ' ' + vehicleOne.model +" "+ vehicleOne.year +'.');
}
