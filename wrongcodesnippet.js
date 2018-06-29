new Promise((resolve, reject) => {
    throw new Error('error')   //Not catch error 
}).then(console.log)

new Promise((resolve, reject) => {
    reject(new Error('error'))
}).catch((error) => console.log(error))