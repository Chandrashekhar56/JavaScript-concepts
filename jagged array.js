//==================================================================================================================================================================================//

const arrays=[[1,2,3],[4,5],[6],[7,8,9]];
let sum=0;
for(let i=0;i<arrays.length;i++)
{
    for(let j=0;j<arrays[i].length;j++)
    {
        sum=sum+arrays[i][j];
    }
}
console.log(sum);

//==================================================================================================================================================================================//

const arrays = [[1, 2, 3], [4, 5], [6], [7, 8, 9]];

const sum = arrays.reduce((total, currentArray) => {
    return total + currentArray.reduce((acc, currentValue) => acc + currentValue, 0);
}, 0);

console.log(sum);

//==================================================================================================================================================================================//
