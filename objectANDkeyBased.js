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
