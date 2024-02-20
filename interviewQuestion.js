
//============================================================================================================================//

const arr = [
    { num: 22 },
    { num: 23 },
    { num: 22 },
    { num: 24 },
];

const counts = {
    22: 0,
    23: 0,
    24: 0,
};

arr.forEach((item) => {
    counts[item.num]++;
});

console.log("22:", counts[22], "23:", counts[23], "24:", counts[24]);

//============================================================================================================================//

const arr = [
    { name: "sachin" },
    { name: "shekhar" },
    { name: "sachin" },
    { name: "shekhar" },
];

const counts = {
    sachin: 0,
    shekhar: 0,
};

arr.forEach((item) => {
    counts[item.name]++;
});
console.log("shekhar:", counts["shekhar"]);

//============================================================================================================================//

const arr = [
    { num: 22 },
    { num: 23 },
    { num: 22 },
    { num: 24 },
];

const counts = {};

arr.forEach((item) => {
    if (counts[item.num] === undefined) {
        counts[item.num] = 1; 
    } else {
        counts[item.num]++;
    }
});

console.log(counts);

//============================================================================================================================//
