let key;
let ob = {};
let newOb={};

for (var i = 0; i <= 10; i++) {
    key = Math.random().toString(36).substring(7);
    newOb = {[key]:{ Even: [], Odd: [] }};
    
    if (i % 2 === 0) {
        newOb[key].Even.push(i);
    } else {
        newOb[key].Odd.push(i);
    }
    key="";
    ob={...ob,...newOb};
}

const result = Object.keys(ob).map((key) => ({ key, Even: ob[key].Even, Odd: ob[key].Odd }));

console.log(result);
/*
[
  { key: 'rctqox', Even: [ 0 ], Odd: [] },
  { key: 'bc3oaj', Even: [], Odd: [ 1 ] },
  { key: '5ab87', Even: [ 2 ], Odd: [] },
  { key: '8ijpwj', Even: [], Odd: [ 3 ] },
  { key: 'cocqh', Even: [ 4 ], Odd: [] },
  { key: 'pllx5', Even: [], Odd: [ 5 ] },
  { key: 'nbqx7b', Even: [ 6 ], Odd: [] },
  { key: '44ocmv', Even: [], Odd: [ 7 ] },
  { key: '5s03l', Even: [ 8 ], Odd: [] },
  { key: '6erjpt', Even: [], Odd: [ 9 ] },
  { key: '1v8qfh', Even: [ 10 ], Odd: [] }
]

*/
