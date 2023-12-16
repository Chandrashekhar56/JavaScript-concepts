const str = [
    { firstname: "shekhar", lastname: "sati" },
    { firstname: "mohit", lastname: "sati" },
    { firstname: "sachin", lastname: "sati" },
];
const str1 = [...str];
str1.map((data, index) => console.log(index + " firstname: " + data.firstname + ", lastname: " + data.lastname));
console.log("\n");
str.map((data, index) => console.log(index + " firstname: " + data.firstname + ", lastname: " + data.lastname));
const rowIndex = 2;
const filteredArray = str1.filter((item, index) => index !== rowIndex);
console.log("\nAfter removing element at index " + rowIndex + ":");
filteredArray.map((data, index) => console.log(index + " firstname: " + data.firstname + ", lastname: " + data.lastname));
