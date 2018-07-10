
const getConnection = (user)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("Connected"),100);
    //setTimeout(()=> reject("Not Connected"),100);
  });
};

const getUser = (msg)=>{
        return new Promise((resolve, reject)=>{
          setTimeout(()=> resolve("User Krishna "+msg),100);
        })
};

const authenticate = (msg)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=> resolve(`${msg} and Authenticated`),100);
    })
};

function start(){
  getConnection()
      .then(getUser)
      .then(authenticate)
      .then(result => console.log(result));
}

start();