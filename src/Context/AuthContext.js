

// import React, { Children } from 'react'

// const { createContext } = require("react");
// export let AuthContext=createContext();
// export default function AuthContextProvider(props) {
//   console.log(props.Children)
//   return  <AuthContext.Provider value={{"x":40}} >

//   {props}


//   </AuthContext.Provider>
  

  


// }




import React, {createContext, useState } from 'react';

export const AuthContext=createContext();

export default function AuthContextProvider({children}) {
const[token,settoken]=useState(null)
return <AuthContext.Provider value={{myToken: token , settoken}}>
 {children}  </AuthContext.Provider>
}

