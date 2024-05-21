function shoppingSpree(arr) {
    const all=arr.reduce((acc,curr)=>{
        console.log("acc: ",acc,"curr: ",curr);
        return acc+curr.price;
    },0);
    return all;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));
/*
output:

acc:  0 curr:  { title: 'Tesla Model S', price: 90000 }
acc:  90000 curr:  { title: '4 carat diamond ring', price: 45000 }
acc:  135000 curr:  { title: 'Fancy hacky Sack', price: 5 }
acc:  135005 curr:  { title: 'Gold fidgit spinner', price: 2000 }
acc:  137005 curr:  { title: 'A second Tesla Model S', price: 90000 }
227005
*/

function flatten(arr) {
    return arr.reduce((acc,curr)=>{
         return acc.concat(curr);
    },[]);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));
/*
output:

[
  '1',  '2', '3',
  true, 4,   5,
  6
]
*/
