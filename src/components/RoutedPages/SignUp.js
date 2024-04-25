import React from "react";
import './../../css/SignUp.css';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
    const emailRef=useRef();
    const passwordRef=useRef();
  
    const navigate=useNavigate();
    


    const signUpHandler=async (e)=>{
    e.preventDefault();
    if(emailRef.current.value==="")
    {
        alert("enter mail id");
    }
    else if(passwordRef.current.value==="")
    {
        alert("password field empty");
    }
    else{

        try{
            await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzQJiXqoJ7rFl8c59SNmM64xXENyEqIrk',
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
            alert("you are signed up");
            emailRef.current.value="";
            passwordRef.current.value="";
            navigate('/')
        }
            catch(error){
              alert("You are not able to sign Up")
             
              emailRef.current.value="";
            passwordRef.current.value="";
              console.log("error occured", error.message);
            }
    }
    }
    return <div className="signup">
    <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Sign Up Form</h1>
    <hr/>
    <form className="form_style" >
    <div className="form_in">
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
    <button  onClick={signUpHandler}>Sign Up</button>
  
   
    </div>
    
  </form>
  </div>
}

export default SignUp;