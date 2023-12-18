const promise = new Promise((resolve, reject) => {
  resolve('Success!');
  reject('Oops, something went wrong!');
});

promise
  .then((result) => {
    console.log(result); 
  })

 promise.catch((error) => {
    console.error(error); 
  });
