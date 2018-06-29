setTimeout(function (name) {
    var catList = name + ',';
  
    setTimeout(function (name) {
      catList += name + ',';
  
      setTimeout(function (name) {
        catList += name + ',';
  
        setTimeout(function (name) {
          catList += name + ',';
  
          setTimeout(function (name) {
            catList += name;
  
            console.log(catList);
          }, 1, 'Lion');
        }, 1, 'Snow Leopard');
      }, 1, 'Lynx');
    }, 1, 'Jaguar');
  }, 1, 'Panther');

  // That is Callback hell.

  //We can use promise to avoid callback hell.

let promiseA = new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimout(wait);
      catList += 'Panther'
      resolve(catList);
    }, 1)
  })
  

  let promiseB = new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimout(wait);
      catList += 'Jaguar'
      resolve(catList);
    }, 1)
  })
  ...................................
  // Let's race our promises
  let race = Promise.race([
    promiseA,
    promiseB,
    promiseC,
    ........
  ])