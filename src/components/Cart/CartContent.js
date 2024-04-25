import React,{useContext} from "react";
import { Modal, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";


const CartContent=(props)=>{
    const cartCtx = useContext(CartContext)

    
    
  
  

      
   
  

    const AddingQuantity=(e)=>{
  e.preventDefault();
  let event_id=e.target.value;
  console.log(event_id);
       const item=(cartCtx.items.filter((it)=>it.id===event_id));
       const data=item[0];
       console.log(data);
       cartCtx.addItem({...data,"quantity":data.quantity+1});
    }

    const RemovingQuantity=(e)=>{
      e.preventDefault();
      cartCtx.removeItem(e.target.value);
    }
    const cartDisplayJsx = cartCtx.items.map((item) =>
    {
        return(
            <tr >
                <td style={{padding:'15px'}}><img style={{width:'80px',height:'80px'}} src={item.imageUrl} alt="pic" />{item.title}</td>
                <td style={{padding:'15px'}}>Rs {item.price}</td>
                <td style={{padding:'15px'}}>{parseInt(item.quantity)}</td>
                <td style={{padding:'15px'}}><button style={{borderRadius:'15px',color:'white',background:'blue'}} value={item.id} onClick={AddingQuantity}>+</button>
                <button style={{borderRadius:'15px',color:'white',background:'blue'}} value={item.id} onClick={RemovingQuantity}>-</button></td>
            </tr>
        )
    })
    return (<>
    <Modal show={true}
    size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      
        <Modal.Header closeButton onClick={props.onClose}>
          <Modal.Title  id="contained-modal-title-vcenter">Cart Items</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Items here.</p>
          {cartDisplayJsx}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>Close</Button>
          <Button variant="primary">Order</Button>
        </Modal.Footer>
      
      </Modal>
    </>)

}

export default CartContent;