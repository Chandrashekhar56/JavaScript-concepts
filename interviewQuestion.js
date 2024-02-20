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
