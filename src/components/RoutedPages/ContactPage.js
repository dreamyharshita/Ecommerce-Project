import React ,{useRef} from "react";
import { Form,Button, Container } from "react-bootstrap";

const ContactPage=()=>{
 
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const InfoHandler=async (e)=>{
 e.preventDefault();
 const obj ={name:nameRef.current.value,
    email:emailRef.current.value,
    phoneNumber:phoneRef.current.value
}
await fetch("https://ecommerce-53c96-default-rtdb.firebaseio.com/contacts.json",{
    method:"POST",
    body:JSON.stringify(obj),
 headers:{'Content-Type':'application/json'}
})
    }
    return <>

    <Form>
        <Container style={{width:'40rem'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control ref={phoneRef} type="number" placeholder="Phone Number" />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={InfoHandler}>
        Submit
      </Button>
      </Container>
    </Form>
    </>
}
export default ContactPage;