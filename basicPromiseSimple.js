 
let promise = new Promise((resolve, reject) => {
    
    let value = false;          //Insted of simple flase write a code over here
  
    if(value){
        resolve("This promise is resolved");
      }
    else {
      reject("This promise has been rejected");
    }
  })
  
  promise.then(
    resolve => console.error(resolve),
    error => console.log(error)
  );
  
  /* //The above line of code(.then) can be written as below, but its a old style
  promise.then( function(resolved){
    console.log(resolved);
  }).catch(function(error){
    console.log(error);
  })
  */
  