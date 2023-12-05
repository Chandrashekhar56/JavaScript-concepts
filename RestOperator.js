
//------------------Rest Operator------------------------------------------//
const ob1 = { name: 'harry', age: '29', add: 'jollygrant' };
const { name, add, ...rest } = ob1;
const ob2 = { name, ...rest };
console.log(ob2);


//------------------------------------------------------------//
const ob3 = { username: 'harry', userage: '29', useradd: 'jollygrant' };
const {username,...restdata}=ob3;
const ob4 = { username, ...restdata };
console.log(ob4);
