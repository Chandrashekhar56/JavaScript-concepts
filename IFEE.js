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
