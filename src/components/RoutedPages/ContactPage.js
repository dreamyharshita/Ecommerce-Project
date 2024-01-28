import React ,{useRef} from "react";
import { Form,Button, Container,Nav,Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


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
nameRef.current.value="";
emailRef.current.value="";
phoneRef.current.value="";
    }
    return <>
      <Navbar style={{background:'black',border:'2px',borderColor:'white',display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
    <Container>
    
<Nav style={{background:'black',border:'2px',borderColor:'white' ,justifyContent:'center'}} className="justify-content-center" activeKey="/home">

<NavLink  to="/home" href="#home" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >
    HOME</NavLink>
<NavLink to="/" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >
    STORE</NavLink>
<NavLink  to="/about" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>
    ABOUT</NavLink>

</Nav>
</Container>
</Navbar>


<h1 style={{textAlign:'center'}}>Contact Us</h1>
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