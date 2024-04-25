import React,{useState,useContext} from "react";
import CartContent from "../../Cart/CartContent";
import { Card,Nav,Button,Navbar} from "react-bootstrap";
import CartContext from "../../../store/cart-context";
import { NavLink } from "react-router-dom";
import './../../../css/Header.css';


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
return  <div className="header">
 
<Navbar className="NavBar" >
    <div className="NavBar_in">
        <div>
<Nav className="nav"   activeKey="/home">

<NavLink  to="/home" href="#home" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >HOME</NavLink>
<NavLink to={"/login/" + ctx.token} style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >STORE</NavLink>
<NavLink  to="/about" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>ABOUT</NavLink>
<NavLink  to="/contact" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>CONTACT US</NavLink>
<NavLink  to={"/login/" + ctx.token} href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>LOGIN</NavLink>
</Nav>
</div>
<div>
<Button className="btn_cart" variant="outline-info" onClick={CartHandler}>Cart {ctx.totalQuantity}</Button> 
</div>
</div>

</Navbar>



<Card className="card_header">
<Card.Body >
<Card.Title style={{fontSize:'7rem' ,fontFamily:'cursive'}}>THE GENERICS</Card.Title>
</Card.Body>

</Card>

{showCart && <CartContent onClose={hideCartHandler}></CartContent>}

</div> 
}

export default Header;