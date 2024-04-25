import React, { useContext } from "react";
import { Card,Button } from "react-bootstrap";
import CartContext from "./../../store/cart-context";
import { NavLink } from "react-router-dom";
import axios from "axios";


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
    
        let email=localStorage.getItem("email").toString().split('@').join('').split('.').join('');
        let crud_id="";
        
    return(<> {
        Products.map((item,index)=>{
           return <Card key={index} style={{ width: '18rem' ,margin:'10rem'}}>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>
            <NavLink to={"/product-details/"+ item.id}>{item.title}</NavLink></Card.Title>

        <Button variant="primary" id={'bt_'+index} value="0" onClick={()=>{
            let quantity=parseInt(document.getElementById('bt_'+index).value);
            console.log("got current quantity of the item",quantity);
            
                quantity+=1;
                item.quantity=quantity;
                console.log("item ki quantity",item.quantity);
                document.getElementById('bt_'+ index).value=quantity;
                CartCTX.addItem({...item,"quantity":quantity});
                console.log("id before deletion",crud_id);
                if(localStorage.getItem("id")!=="")
                {
                    crud_id=localStorage.getItem("id");
                    axios.delete(`https://crudcrud.com/api/d83d103a67a34f8d98f1ef5f32d02f07/${email}/${crud_id}`).then(()=>{
                        console.log("deleted");
                    })
                }
                axios.post(`https://crudcrud.com/api/d83d103a67a34f8d98f1ef5f32d02f07/${email}`,{
      "items": CartCTX.items
    }).then((res)=>{
    crud_id=res.data._id;
    localStorage.setItem("id",crud_id);
    console.log(crud_id);}
    )

        }}>Add to Cart</Button>
      </Card.Body>
    </Card>
        })
    }</>)
    
}

export default AlbumCard;