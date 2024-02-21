//======================================================================================================================================================================================//
function findSecondLargest(arr) { 
  arr.sort((a, b)=> b - a); 
  return arr; 
} 
let arr=[1,2,3,4,5,6,7,8,9,10];
let result=findSecondLargest(arr);
console.log("First Largest: ",result[0]);
console.log("Second Largest: ",result[1]);
/*
Output:
First Largest:  10
Second Largest:  9

*/
//======================================================================================================================================================================================//

let arr=[1,2,3,4,5,6,7,8,9,10];
let first=arr[0];
let second=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>first)
    {
        swap=first;
        first=arr[i];
        second=swap;
        console.log("first: ",first,"second: ",second);
    }
    else
    {
        second=first;
        console.log("first: ",first,"second: ",second);
    }
}
console.log("First Largest: ",first);
console.log("Second Largest: ",second);
/*
Output:

first:  1 second:  1
first:  2 second:  1
first:  3 second:  2
first:  4 second:  3
first:  5 second:  4
first:  6 second:  5
first:  7 second:  6
first:  8 second:  7
first:  9 second:  8
first:  10 second:  9
First Largest:  10
Second Largest:  9
*/

//======================================================================================================================================================================================//
