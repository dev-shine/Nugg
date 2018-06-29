Promise.resolve(1).then(y => y + 1)   //              y = 2 . y is set with 1 (return resolve) and plus 1 to 2.
.then(y => {
    throw new Error('Error')          //               No error returned
}).catch(() => 1)                     //               y is set by 1
.then(y => y + 1)                     //               then y = 2
.then(y => console.log(y))            //               Output 2
.catch(console.error)                 //               No error returned
