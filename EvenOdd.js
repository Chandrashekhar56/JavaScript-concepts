//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const ar=[2,3,4,5,1,6,7,8,9,0];
const even=[]; const odd=[];
for(var i=0;i<ar.length;i++)
{
    if(ar[i]%2){	 even.push(ar[i]);	}
    else{	odd.push(ar[i]);	}
} 
even.sort(); 
odd.sort(); 
console.log(even); 
console.log(odd);
console.log("Maximum Even number: ",even[even.length-1]); 
console.log("Minimum Even number: ",even[0]);
console.log("Maximum Odd number: ",odd[odd.length-1]); 
console.log("Minimun Odd number: ",odd[0]);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let ob = [{arr: [2, 3, 4, 5, 1, 6, 7, 8, 9, 0], even: [], odd: [], MaximumEven: undefined, MinimumEven: undefined, MaximumOdd: undefined, MinimumOdd: undefined}];
for(let i=0;i<ob[0].arr.length-1;i++)
    {
        if(ob[0].arr[i]%2==0) ob[0].even.push(ob[0].arr[i]); else ob[0].odd.push(ob[0].arr[i]);
    }
ob[0].even.sort();
ob[0].odd.sort();
ob[0].MaximumEven=ob[0].even[ob[0].even.length-1];
ob[0].MinimumEven=ob[0].even[0];
ob[0].MaximumOdd=ob[0].odd[ob[0].odd.length-1];
ob[0].MinimumOdd=ob[0].odd[0];
console.log(ob[0]);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let ob = {arr: [2, 3, 4, 5, 1, 6, 7, 8, 9, 0], even: [], odd: [], MaximumEven: undefined, MinimumEven: undefined, MaximumOdd: undefined, MinimumOdd: undefined};
for(let i=0;i<ob.arr.length-1;i++)
    {
        if(ob.arr[i]%2==0)
         ob.even.push(ob.arr[i]); 
        else 
         ob.odd.push(ob.arr[i]);
    }
ob.even.sort();
ob.odd.sort();
ob.MaximumEven=ob.even[ob.even.length-1];
ob.MinimumEven=ob.even;
ob.MaximumOdd=ob.odd[ob.odd.length-1];
ob.MinimumOdd=ob.odd;
console.log(ob);
