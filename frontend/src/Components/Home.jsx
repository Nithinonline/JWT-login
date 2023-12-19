// import axios from "axios"
// import React, { useEffect, useState } from 'react'

// axios.defaults.withCredentials=true

// function Home() {

//     const[user,setUser]=useState()
//     let flag= true

//     const passRequest= async()=>{
//         const res=await axios.get("http://localhost:9000/demo/verify",{
//             withCredentials:true
//         })
//         .catch((error)=> console.log(error))
//         console.log(res)
//         const data = await res.data.user
//         return data
//     }

//     const refreshToken= async()=>{
//       const response=await axios.get("http://localhost:9000/demo/refreshToken",{
//         withCredentials:true
//       })
//       .catch((error)=>console.log(error))
//       console.log(res.data)
//       const data=await  response.data.user
//       return data
//     }

//   useEffect(()=>{
//     if(flag){
//       flag=false
//       passRequest().then((data)=>setUser(data))

//     }
//     let interval=setInterval(()=>{
//       refreshToken().then((data)=>setUser(data))
//     },1000*29)

//     return ()=>clearInterval(interval)


//   },[])

//   console.log(user);
//   return (
//     <div style={{marginTop:"100px"}}>home 
//     <h1>{user.name}</h1>
    
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true
let flag = true

const Home = () => {

  const [user, setUser] = useState()

  const refreshToken = async() => {
    const res = await axios.get("http://localhost:9000/demo/refreshToken", {
      withCredentials:true
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(res)
    const data = await res.data
    return data
  }

  const passRequest = async() => {
    const res = await axios.get("http://localhost:9000/demo/verify", {
      withCredentials:true
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(res)
    const data = await res.data
    return data
  }

  useEffect(() => {
    if(flag){
      flag = false
      passRequest().then((data) => {setUser(data.user)})
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => {setUser(data.user)})
    }, 1000*29)
    return () => clearInterval(interval)
  },[])

  return (
    <div style={{marginTop:"100px"}}>hellooo{user && <h1>welcome {user.name}</h1>}</div>
  )
}



export default Home