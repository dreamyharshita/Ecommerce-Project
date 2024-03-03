import React,{useState,useContext} from "react";
import CartContent from "../../Cart/CartContent";
import { Card,Nav,Button,Navbar, Container} from "react-bootstrap";
import CartContext from "../../../store/cart-context";
import { NavLink } from "react-router-dom";




const Header=()=>{

    const ctx=useContext(CartContext);
    const [showCart,UpdateShowCart]=useState(false);
const CartHandler=(event)=>{
    console.log("cart clicked")
   
    event.preventDefault();
    UpdateShowCart(true);
  
}    

const hideCartHandler=()=>{
    UpdateShowCart(false);
}
return  <>
 
<Navbar style={{background:'black',border:'2px',borderColor:'white',display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
    <Container>
    
<Nav style={{background:'black',border:'2px',borderColor:'white' ,justifyContent:'center'}} className="justify-content-center" activeKey="/home">

<NavLink  to="/home" href="#home" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >HOME</NavLink>
<NavLink to={"/login/" + ctx.token} style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >STORE</NavLink>
<NavLink  to="/about" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>ABOUT</NavLink>
<NavLink  to="/contact" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>CONTACT US</NavLink>
<NavLink  to={"/login/" + ctx.token} href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>LOGIN</NavLink>
</Nav>

<Button variant="outline-info" onClick={CartHandler}>Cart {ctx.totalQuantity}</Button> 

</Container>
</Navbar>

<Card style={{ width: '98rem',textAlign:'center',height:'12rem', fontFamily:'fantasy', fontSize:'xx-large',color:'white',background:'grey' }}>
<Card.Body>
<Card.Title style={{fontSize:'7rem' ,fontFamily:'cursive'}}>THE GENERICS</Card.Title>
</Card.Body>
</Card>
{showCart && <CartContent onClose={hideCartHandler}></CartContent>}
</> 
}

export default Header;