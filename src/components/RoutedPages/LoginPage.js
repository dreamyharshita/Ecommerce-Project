import React,{useRef,useState} from "react";
import Header from './../UI/Header/Header.js'



import { useNavigate } from "react-router-dom";


const LoginPage=()=>{
 const emailRef=useRef();
 const passwordRef=useRef();
const navigate=useNavigate();
 const [login,setLogin]=useState(false);

 const LoginHandler=async (e)=>{
  
  e.preventDefault();
  const res=  await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzQJiXqoJ7rFl8c59SNmM64xXENyEqIrk',
    {
      method:"POST",
      body: JSON.stringify({
        email:emailRef.current.value,
        password:passwordRef.current.value,
       returnSecureToken:true
      }),
      header:{
        'Content-Type':'application/json'
      }
    })
   
   if(res.ok){
    alert("logged in");
    setLogin(true);
    passwordRef.current.value="";
   emailRef.current.value="";
   }
   else{
    alert("Authentication failed..");
   }
 
   
 }
return <>
<Header/>
<form style={{marginLeft:"25rem",marginRight:"25rem",justifyContent:"center",display:"flex",flexWrap:"wrap",borderStyle:"dashed",borderColor:"black"}} >
  <div >
    <label htmlFor='email'>Your Email</label>
    <input ref={emailRef} type='email' id='email' required />
    <br></br>
 
    <label htmlFor='password'>Your Password</label>
    <input ref={passwordRef}
      type='password'
      id='password'
      required
    />
    <br></br>
 
  <br></br>
  <button  onClick={LoginHandler}>Login</button>

 
  </div>
  
</form>
{login && navigate('/') }
</>


}

export default LoginPage;