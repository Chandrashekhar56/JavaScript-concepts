function curryAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}
const curriedAdd = curryAdd(5)(3)(2);
console.log(curriedAdd);  /*    output:    10    */
