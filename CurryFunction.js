\\=================================================================================================================================================\\

function curryAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}
const curriedAdd = curryAdd(5)(3)(2);
console.log(curriedAdd);  /*  output:  10  */

\\=================================================================================================================================================\\
 
function curryAdd(x) {
  return function(y) {
    return function(z) {
      return x + y;
    };
  };
}
const curriedAdd = curryAdd(5)(3)(2);
console.log(curriedAdd); /*  output:  8  */  

\\=================================================================================================================================================\\

function curryAdd(x) {
  return function(y) {
    return function(z) {
      return x;
    };
  };
}
const curriedAdd = curryAdd(5)(3)(2);
console.log(curriedAdd); /*  output:  5  */  

\\=================================================================================================================================================\\

function curryAdd(x) {
  return function(y) {
    return function(z) {
      return 'by by';
    };
  };
}
const curriedAdd = curryAdd(5)(3)(2);
console.log(curriedAdd); /*  output:  by by  */

\\=================================================================================================================================================\\
