import React,{useRef} from "react";
import Header from './../UI/Header/Header.js'
import CartContext from "../../store/cart-context.js";
import { Button,Container,Row,Col } from "react-bootstrap";
import './../../css/Login.css';
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
  
   
   const data= await res.json();
   const id=data.idToken;
   const em=emailRef.current.value;
   console.log("email",em);
  ctx.login(id);
  alert("logged in");
 
   }
   else{
    alert("Authentication failed..");
   }
 
   
 }
 const NavigateFun=()=>{
  if(ctx.token!==null){
    
    navigate('/login/'+ ctx.token);
    localStorage.clear();
    localStorage.setItem("email",emailRef.current.value);
  }
 
  
 }
return <Container fluid>
  <Row>
    <Col>
<Header/>
<div className="login_page">
<form style={{marginLeft:"25rem",marginRight:"25rem",marginBottom:"20px" ,padding:"15px",background:"white", justifyContent:"center",display:"flex",flexWrap:"wrap",borderStyle:"dashed",borderColor:"black"}} >
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
<Button variant="outline-dark" onClick={(e)=>{
  e.preventDefault();
navigate("/signup");
}}>SignUp</Button>
</div>
</Col>
</Row>
</Container>



}

export default LoginPage;