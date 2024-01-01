
//=========================================================================(Call by value)=============================================================================================//

const str1="hello";
function dis(str1)
{
    str1="change";
    console.log("Inside: ",str1);
}
dis(str1);
console.log("Outsite: ",str1);
/*
output:

Inside:  hello
Outsite:  hello

*/

//======================================================================(Call by reference)============================================================================================//

const str2={property: "hello"};
function dis(str2)
{
    str2.property="change";
    console.log("Inside: ",str2);
}
dis(str2);
console.log("Outsite: ",str2);

/*
output:

Inside:  { property: 'change' }
Outsite:  { property: 'change' }

*/
