/*=================================================================================================================================================================================*/
const numbers = [5, 12, 8, 21, 3, 19];
let categorizedNumbers=numbers.reduce((acc, item) => {
  if (item >= 10) {
    acc["above 10"].push(item);
  }
  if (item % 2 === 0) {
    acc["even"].push(item);
  }
  if (item % 2 !== 0) {
    acc["odd"].push(item);
  }
  if (item < 10) {
    acc["below 10"].push(item);
  }
  return acc;
}, {
  "above 10": [],
  "below 10": [],
  "even": [],
  "odd": [],
});


console.log(categorizedNumbers);
/*=================================================================================================================================================================================*/

const numbers = [5, 12, 8, 21, 3, 19];
let categorizedNumbers = numbers.reduce((acc, item) => {
  if (item >= 10) {
    if (!acc["above 10"]) {
      acc["above 10"] = [];
    }
    acc["above 10"].push(item);
  }
  if (item % 2 === 0) {
    if (!acc["even"]) {
      acc["even"] = [];
    }
    acc["even"].push(item);
  }
  if (item % 2 !== 0) {
    if (!acc["odd"]) {
      acc["odd"] = [];
    }
    acc["odd"].push(item);
  }
  if (item < 10) {
    if (!acc["below 10"]) {
      acc["below 10"] = [];
    }
    acc["below 10"].push(item);
  }
  return acc;
}, {});

console.log(categorizedNumbers);

/*=================================================================================================================================================================================*/

const numbers = [5, 12, 8, 21, 3, 19];
let categorizedNumbers = {
  "above 10": [],
  "below 10": [],
  "even": [],
  "odd": [],
};
categorizedNumbers=numbers.reduce((acc, item) => {
  if (item >= 10) {
    acc["above 10"].push(item);
  }
  if (item % 2 === 0) {
    acc["even"].push(item);
  }
  if (item % 2 !== 0) {
    acc["odd"].push(item);
  }
  if (item < 10) {
    acc["below 10"].push(item);
  }
  return acc;
},categorizedNumbers);


console.log(categorizedNumbers);

/*=================================================================================================================================================================================*/
/*
Output:
{
  'above 10': [ 12, 21, 19 ],
  'below 10': [ 5, 8, 3 ],
  even: [ 12, 8 ],
  odd: [ 5, 21, 3, 19 ]
}
*/
