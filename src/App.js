import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import Header from './components/UI/Header/Header';
import AlbumCard from './components/Albums/AlbumCard';
import CartContent from './components/Cart/CartContent';
import './App.css';
import CartProvider from './store/CartProvider';
import CartContext from './store/cart-context';
import { useContext } from 'react';





function App() {

  const ctx=useContext(CartContext);
  

  const [cartState, setCartState] = useState(false);
  const navigate=useNavigate();
  function cartTrue()
  {
    setCartState(true)
    
  }

  function cartFalse()
  {
    setCartState(false)
    console.log("object")
  }
 
const logoutHandler=(e)=>{
  e.preventDefault();
  ctx.login(null);
  navigate("/login/null");
 localStorage.clear();
 localStorage.setItem("email",null);
}
  return (
    <>
   
    <CartProvider>
      {cartState && <CartContent closeCart={cartFalse}/>}
    <Header cartTrue={cartTrue}></Header>
    
    <div>
<div style={{justifyContent:"center",alignItems:"center", display:"flex", flexDirection:"column"}}>
      <h1 style={{textAlign:'center'}}>MUSIC </h1>
      <button onClick={logoutHandler} >Logout</button>
      </div>
      <div style={{display:'flex', flexWrap:'wrap'}}>
    <AlbumCard></AlbumCard>
      </div>
     
    </div>
          
    </CartProvider>
    
    </>
    
  );
}

export default App;
