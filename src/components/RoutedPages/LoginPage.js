import React,{useRef} from "react";
import Header from './../UI/Header/Header.js'
import CartContext from "../../store/cart-context.js";


import { useNavigate } from "react-router-dom";
import { useContext } from "react";



const LoginPage=()=>{
 
const ctx=useContext(CartContext);

 const emailRef=useRef();
 const passwordRef=useRef();
const navigate=useNavigate();

 
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
    passwordRef.current.value="";
   emailRef.current.value="";
   const data= await res.json();
   const id=data.idToken;
  ctx.login(id);
 
   }
   else{
    alert("Authentication failed..");
   }
 
   
 }
 const NavigateFun=()=>{
  if(ctx.token!==null){
    
    navigate('/login/'+ ctx.token);
    console.log("isLogin",ctx.isLogin);
  console.log("Id",ctx.token);
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
{ctx.isLogin &&  NavigateFun()}

</>


}

export default LoginPage;