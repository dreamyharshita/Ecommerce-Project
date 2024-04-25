import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TicketModal(props) {
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  
  const handleBuy=(e)=>{
   e.preventDefault();
   setShow(false);
   alert("Ticket is mailed on your mail-id");
   
  }

  return (
    <>
     

      <Modal show={show} onHide={handleClose} id={props.ticket}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Buy the ticket to enjoy your show!!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBuy}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TicketModal;