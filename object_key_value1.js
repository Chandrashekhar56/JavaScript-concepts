let key;
const ob = {};

for (var i = 0; i <= 10; i++) {
    key = Math.random().toString(36).substring(7);
    ob[key] = { Even: [], Odd: [] };

    if (i % 2 === 0) {
        ob[key].Even.push(i);
    } else {
        ob[key].Odd.push(i);
    }
}

Object.keys(ob).forEach((key) => {
    console.log(key, ob[key].Even, ob[key].Odd);
});


/*
[
  { key: 'b08vka', even: [ 0 ], odd: [] },
  { key: 'gviwq', even: [], odd: [ 1 ] },
  { key: '9mco7r', even: [ 2 ], odd: [] },
  { key: '57zi9g', even: [], odd: [ 3 ] },
  { key: 'qgz4h', even: [ 4 ], odd: [] },
  { key: '4zs7qk', even: [], odd: [ 5 ] },
  { key: 'unjtpi', even: [ 6 ], odd: [] },
  { key: '52kcni', even: [], odd: [ 7 ] },
  { key: 'v03dtc', even: [ 8 ], odd: [] },
  { key: '2c5f8i', even: [], odd: [ 9 ] },
  { key: 'wbh5hh', even: [ 10 ], odd: [] }
]
*/
