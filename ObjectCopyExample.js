const classes = {
    first:{name:'Piyush'},
    second:{name:'Aman'}

}
console.log("=========================================================================");
classes.third = {name:'1234'};
const classesCopy= {...classes};
const classes1Copy=classes;
console.log("classes>>>",classes)
console.log("classesCopy>>>",classesCopy)
console.log("classes1Copy>>>",classes1Copy)

console.log("=========================================================================");

classes1Copy.fourth = {name:'4567'};
classes1Copy.first.name='Vivek'
console.log("classes>>>",classes)
console.log("classesCopy>>>",classesCopy)
console.log("classes1Copy>>>",classes1Copy)

console.log("=========================================================================");


/*
output:

=========================================================================
classes> {
  first: { name: 'Piyush' },
  second: { name: 'Aman' },
  third: { name: '1234' }
}
classesCopy> {
  first: { name: 'Piyush' },
  second: { name: 'Aman' },
  third: { name: '1234' }
}
classes1Copy> {
  first: { name: 'Piyush' },
  second: { name: 'Aman' },
  third: { name: '1234' }
}
=========================================================================
classes> {
  first: { name: 'Vivek' },
  second: { name: 'Aman' },
  third: { name: '1234' },
  fourth: { name: '4567' }
}
classesCopy> {
  first: { name: 'Vivek' },
  second: { name: 'Aman' },
  third: { name: '1234' }
}
classes1Copy> {
  first: { name: 'Vivek' },
  second: { name: 'Aman' },
  third: { name: '1234' },
  fourth: { name: '4567' }
}
=========================================================================

*/
