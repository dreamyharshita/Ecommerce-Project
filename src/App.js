import React,{useState} from 'react';
import Header from './components/UI/Header/Header';
import AlbumCard from './components/Albums/AlbumCard';
import CartContent from './components/Cart/CartContent';
import './App.css';
import CartProvider from './store/CartProvider';

function App() {

  const [cartState, setCartState] = useState(false);

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
 

  return (
    <CartProvider>
      {cartState && <CartContent closeCart={cartFalse}/>}
    <Header cartTrue={cartTrue}></Header>
    
    <div>
      <h1 style={{textAlign:'center'}}>MUSIC</h1>
      <div style={{display:'flex', flexWrap:'wrap'}}>
    <AlbumCard></AlbumCard>
      </div>
     
    </div>
          
    </CartProvider>
  );
}

export default App;
