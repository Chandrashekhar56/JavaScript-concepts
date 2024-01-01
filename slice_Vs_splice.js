const arr=[1,2,3,4,5,6,7,8,9];
console.log("Using slice method(0,3): ",arr.slice(0,3));
console.log("arr: ",arr);

console.log("Using splice method(0,3): ",arr.splice(0,3));
console.log("arr: ",arr);

/*
output:

Using slice method(0,3):  [ 1, 2, 3 ]
arr:  [  1, 2, 3, 4, 5,  6, 7, 8, 9  ]

Using splice method(0,3):  [ 1, 2, 3 ]
arr:  [ 4, 5, 6, 7, 8, 9 ]
*/
