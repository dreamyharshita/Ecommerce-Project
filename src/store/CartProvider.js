import React, { useState } from 'react';
import CartContext from './cart-context.js';

export default function CartProvider(props) {

const [items,updateItems]=useState([]);

const [token,setToken]=useState(null);
const[userIsLoggedIn,setLoggedIn]=useState(false);
    const[amount,updateAmount]=useState(0);

    const addItemHandler=(item)=>{

        if(items.length===0){

        updateItems([...items,item]);
        amountHandler(item.quantity);
        }
        else{
            let data=items.filter((it)=>{
                return it.id===item.id
            })
            console.log("data after filter",data);
            if(data.length===0)
            {
         updateItems([...items,item]);
        amountHandler(parseInt(amount)+1);
            }
            else{

                data[0].quantity=parseInt(item.quantity);
              amountHandler(parseInt(amount)+1);
                data="";
            }
        }


    }
    const amountHandler=(a)=>{
      updateAmount(a);
  }
  const removeItemFromCartHandler=id=>{

    let data=items.filter((it)=>{
     return it.id===id})

if(data[0].quantity>1){
 data[0].quantity=data[0].quantity-1;
 updateAmount(parseInt(amount)-1);
 updateItems(items);
}
else if(data[0].quantity===1){
 const updatedData = items.filter((item) => item.id !== data[0].id);
 updateItems(updatedData);
updateAmount(parseInt(amount)-1);
}
 };

 
 

 const loginHandler=(token)=>{
 
  setToken(token);
  setLoggedIn(!!token);
 }

  return (
    <CartContext.Provider value={{items:items,
    addItem:addItemHandler,
    totalQuantity:amount,
    removeItem:removeItemFromCartHandler,
    isLogin:userIsLoggedIn,
    login:loginHandler,
    token:token}}>
      {props.children }
     
    </CartContext.Provider>
  )
}