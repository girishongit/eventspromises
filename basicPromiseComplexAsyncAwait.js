
const getConnection = async (user)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=> resolve("Connected"),100);
    });
  };
  
  const getUser = async (msg)=>{
          return new Promise((resolve, reject)=>{
            setTimeout(()=> resolve("User Krishna "+msg),100);
          })
  };
  
  const authenticate = async (msg)=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(`${msg} and Authenticated`),100);
      })
  };
  
  async function start(){
    let connection = await getConnection();
    let user = await getUser(connection);
    let authenticated = await authenticate(user);
    console.log(authenticated);
  }
  
  start();