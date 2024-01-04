(function a()
{
    function b()
    {
        function c()
        {
            function d()
            {
                console.log("Nikal Pahle Fursat Me");
            }
            return {d:d};
        }
        return {c:c};
    }
    return {b:b};
})().b().c().d();

/*
output:

Nikal Pahle Fursat Me
*/

//===============================================================================================================================================================//

const temp=(function f1() {
    function f2() {
        console.log("hello dear...");
    }
    function f3() {
        console.log("bye bye");
    }
    return { f3,f2 };
})();
console.log(temp);
temp.f3();
temp.f2();

/*
output:    

{ f3: [Function: f3], f2: [Function: f2] }
bye bye
hello dear...
*/

//===============================================================================================================================================================//

