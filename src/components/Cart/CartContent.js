import React,{useContext} from "react";
import { Modal, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";


const CartContent=(props)=>{
    const cartCtx = useContext(CartContext)
    const cartDisplayJsx = cartCtx.items.map((item) =>
    {
        return(
            <tr >
                <td style={{padding:'15px'}}><img style={{width:'80px',height:'80px'}} src={item.imageUrl} alt="pic" />{item.title}</td>
                <td style={{padding:'15px'}}>Rs {item.price}</td>
                <td style={{padding:'15px'}}>{parseInt(item.quantity)}</td>
                <td style={{padding:'15px'}}><button style={{borderRadius:'15px',color:'white',background:'blue'}}>Remove</button></td>
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
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      
      </Modal>
    </>)

}

export default CartContent;