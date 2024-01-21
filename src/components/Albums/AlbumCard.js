import React, { useContext } from "react";
import { Card,Button } from "react-bootstrap";
import CartContext from "./../../store/cart-context";

const AlbumCard=(props)=>{
 
    const CartCTX= useContext(CartContext);
    const Products=[

        {
        id:'i1',
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
            id:'i2',
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
            id:'i3',
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
            id:'i4',
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ];
    
        
    return(<> {
        Products.map((item,index)=>{
           return <Card key={index} style={{ width: '18rem' ,margin:'10rem'}}>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>

        <Button variant="primary" id={'bt_'+index} value="0" onClick={()=>{
            let quantity=parseInt(document.getElementById('bt_'+index).value);
            console.log("got cuurent quantity of the item",quantity);
            if(quantity>0){
                quantity+=1;
                item.quantity=quantity;
                console.log("item ki quantity",item.quantity);
                document.getElementById('bt_'+ index).value=quantity;
                CartCTX.addItem({...item,"quantity":quantity});
                console.log("quantity",quantity);
            }
            else{
                quantity+=1;
                console.log("sabse pheli quantity");
                document.getElementById('bt_'+ index).value=quantity;
                CartCTX.addItem({...item,"quantity":quantity});


            }
           
           
           
         
 
CartCTX.addItem({...item,"quantity":quantity});

        }}>Add to Cart</Button>
      </Card.Body>
    </Card>
        })
    }</>)
    
}

export default AlbumCard;