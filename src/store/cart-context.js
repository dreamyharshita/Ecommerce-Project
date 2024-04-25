import React from "react";

const CartContext = React.createContext({
    items:[],
    addItem:(item)=>{},
    totalQuantity:0,
    removeItem:(item)=>{},
    login:(token)=>{},
    
    isLogin:false,
    token:'',
    
});

export default CartContext;