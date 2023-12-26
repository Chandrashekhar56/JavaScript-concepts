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

\\=======================================================================================================\\
        
let ar=['value1','value2','value3','value4'];
let ob1=[...ar];
let ob2={...ar, 4:'value5'};

console.log(ob1);
ob1.forEach((item,index)=> console.log(item));

console.log("\\----------------------\\-------------------------\\");

console.log(ob2);
ob1.map((item,index)=> console.log(index +" :  "+ item));

/*        output:

[ 'value1', 'value2', 'value3', 'value4' ]
value1
value2
value3
value4

\----------------------\-------------------------\

{
  '0': 'value1',
  '1': 'value2',
  '2': 'value3',
  '3': 'value4',
  '4': 'value5'
}
0 :  value1
1 :  value2
2 :  value3
3 :  value4


*/
