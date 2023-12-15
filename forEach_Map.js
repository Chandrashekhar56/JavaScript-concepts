const arr=[
        { firstname:"shekhar", lastname:"sati",age:"21" },
        { firstname:"sachin", lastname:"gariya",age:"23" },
        { firstname:"mohit", lastname:"paliwal",age:"21" },
        { firstname:"vijay", lastname:"kant",age:"21" },
        ];

console.log("Display by forEach\n");
arr.forEach((e,index)=>{    console.log(index+" "+e.firstname+" "+e.lastname+" "+e.age);});
console.log("\n//---------------------------------------------------//\n");
console.log("Display by map\n");
arr.map((e,index)=>{
    console.log(index+" "+e.firstname+" "+e.lastname+" "+e.age);
});

