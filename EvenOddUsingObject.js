const ob = { Even:[], Odd:[] };
for (var i=0; i<=100; i++) 
{
    if (i % 2 === 0) 
        ob.Even.push(i);
    else 
        ob.Odd.push(i);
}
console.log(ob);
