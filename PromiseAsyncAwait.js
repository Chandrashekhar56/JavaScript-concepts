const test =() => {
  const delay = () => new Promise((resolve) => {
    setTimeout(() => {
      console.log(">>> resolving promise");
      resolve();
    }, 2000);
  });
  console.log("1st");
  delay(); 
  console.log("2st");
};
test();
/*
Output:

1st
2st
>>> resolving promise
*/

//=================================================================================================================================//

const test = async () => {
  const delay = () => new Promise((resolve) => {
    setTimeout(() => {
      console.log(">>> resolving promise");
      resolve();
    }, 2000);
  });
  console.log("1st");
  await delay(); 
  console.log("2st");
};
test();

/*
Output:

1st
>>> resolving promise
2st
*/

//=================================================================================================================================//
