const user = {
  id: 1,
  username: 'john_doe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
const { id, username, fullName: { firstName, lastName } } = user;

console.log(id);        
console.log(username); 
console.log(firstName);
console.log(lastName);

/*
1
john_doe
John
Doe
*/
