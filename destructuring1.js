
//------------------------destructuring--------------------------------------//

function calculation(a,b)
{
  const add=a+b;
  const div=a/b;
  const sub=a-b;
  const mul=a*b;
  
  return [add,div,sub,mul];
}
const[add,div,sub,mul]=calculation(10,20);

console.log(add);
console.log(div);
console.log(sub);
console.log(mul);

