function sum(add)
{
    console.log("Addition: ",add);
}
function operation(value,callback)
{
    value=value+20;
    callback(value);
}
operation(10,sum);
