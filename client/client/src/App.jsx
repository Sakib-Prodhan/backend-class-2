import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const[user, setUser] = useState([]);
  const[name, setUname] = useState("");
  const[email, setEmail] = useState("");

 useEffect

 const handleSubmit =() => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:9000/userinfo',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : {name: name, email:email}
  };
  
  axios.request(config)
  .then((response) => {
    console.log(response.data);
    setUser((item)=> [...item, response.data]);
    console.log(user)
  })
  .catch((error) => {
    console.log(error);
  });
 } 

  return (
    <>
     {user.length !=0 && user.map((item, index) => (
      <div key={index}>
       <h1>{item.name}</h1>
      <p>{item.email} </p>
      </div> ))}

    <div>
      <input type="text" value = {name} placeholder='Name' onChange={(e)=>setUname(e.target.value)} />
      <input type="text" value = {email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>

    </div>

    </>
  )
}

export default App
