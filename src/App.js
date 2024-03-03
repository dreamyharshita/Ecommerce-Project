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
    console.log("object")
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
  console.log("logout clicked")
}
  return (
    <>
   
    <CartProvider>
      {cartState && <CartContent closeCart={cartFalse}/>}
    <Header cartTrue={cartTrue}></Header>
    
    <div>

      <h1 style={{textAlign:'center'}}>MUSIC </h1>
      <button onClick={logoutHandler}>Logout</button>
      <div style={{display:'flex', flexWrap:'wrap'}}>
    <AlbumCard></AlbumCard>
      </div>
     
    </div>
          
    </CartProvider>
    
    </>
    
  );
}

export default App;
