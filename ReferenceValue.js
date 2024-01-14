
//====================================================================================================================================//

const user=[{username:'shekhar', age:20}];
const user1=user;
user1.username='sachin';
user1.age=20;
console.log(user1);
user1.username='shekhar';
user1.age=20;
console.log(user1);

/*
output:

[ { username: 'shekhar', age: 20 }, username: 'sachin', age: 20 ]
[ { username: 'shekhar', age: 20 }, username: 'shekhar', age: 20 ]

*/
//====================================================================================================================================//

const user=[{username:'shekhar', age:20}];
const user1=user;

user1.username='sachin';
user1.age=20;

console.log(user1);
console.log("Username:",user1.username," ","Age:",user1.age);

console.log(user);
console.log("Username:",user.username," ","Age:",user.age);

/*
output:

[ { username: 'shekhar', age: 20 }, username: 'sachin', age: 20 ]
Username: sachin   Age: 20
[ { username: 'shekhar', age: 20 }, username: 'sachin', age: 20 ]
Username: sachin   Age: 20
*/

//====================================================================================================================================//
