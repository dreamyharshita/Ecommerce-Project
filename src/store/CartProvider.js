import React, { useState } from 'react';
import CartContext from './cart-context.js';

export default function CartProvider(props) {

const [items,updateItems]=useState([]);


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

                data[0].quantity=item.quantity;
              amountHandler(parseInt(amount)+1);
                data="";
            }
        }


    }
    const amountHandler=(a)=>{
      updateAmount(a);
  }


  return (
    <CartContext.Provider value={{items:items,addItem:addItemHandler,totalQuantity:amount}}>
      {props.children}
    </CartContext.Provider>
  )
}