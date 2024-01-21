import React from "react";

const CartContext = React.createContext({
    items:[],
    addItem:(item)=>{},
    totalQuantity:0
});

export default CartContext;