const createDeepCopy = (input) => {
  //====================================( Step 1 )====================================================//
  if (typeof input !== "object" || input === null) { return input; }
  //====================================( Step 2 )====================================================//
  let copy = Array.isArray(input) ? [] : {};
  //====================================( Step 3 )====================================================//
  for (let key in input) {
    if (input.hasOwnProperty(key)) {
      const value = input[key];
      copy[key] = createDeepCopy(value);}}
  //====================================( Step 4 )====================================================//
  return copy;
};

const person={
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "Anytown",
    country: "USA"
  },
  hobbies: ["reading", "painting", "hiking"],
  friends: [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 32 }
  ]
};
const deepCopy=createDeepCopy(person);
deepCopy.address.city="jaipur";
console.log("deepCopy: ",deepCopy);
console.log("person: ",person);

//=====================================================================================================================================//
/*
output:

deepCopy:  {
  name: 'John Doe',
  age: 30,
  address: { street: '123 Main Street', city: 'jaipur', country: 'USA' },
  hobbies: [ 'reading', 'painting', 'hiking' ],
  friends: [ { name: 'Alice', age: 28 }, { name: 'Bob', age: 32 } ]
}
person:  {
  name: 'John Doe',
  age: 30,
  address: { street: '123 Main Street', city: 'Anytown', country: 'USA' },
  hobbies: [ 'reading', 'painting', 'hiking' ],
  friends: [ { name: 'Alice', age: 28 }, { name: 'Bob', age: 32 } ]
}
*/

//=====================================================================================================================================//
