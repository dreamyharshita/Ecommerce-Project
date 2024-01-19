import React from 'react';
import { Nav,Card,Button} from 'react-bootstrap';
import alb1 from './assests/alb1.webp'

import './App.css';

function App() {

 

  return (
    <div>
    
    
      <Nav style={{background:'black',border:'2px',borderColor:'white'}} className="justify-content-center" activeKey="/home">
            <Nav.Link  href="#link" style={{color:'white'}} >HOME</Nav.Link>
            <Nav.Link href="#link" style={{color:'white'}} >STORE</Nav.Link>
            <Nav.Link href="#link"  style={{color:'white'}}>ABOUT</Nav.Link>
            </Nav>
            <Card style={{ width: '98rem',textAlign:'center',height:'12rem', fontFamily:'fantasy', fontSize:'xx-large',color:'white',background:'grey' }}>
      <Card.Body>
        <Card.Title style={{fontSize:'7rem' ,fontFamily:'cursive'}}>THE GENERICS</Card.Title>
      </Card.Body>
    </Card>
    <div>
      <h1 style={{textAlign:'center'}}>MUSIC</h1>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      <Card style={{ width: '18rem' ,margin:'10rem'}}>
      <Card.Img variant="top" src={alb1} />
      <Card.Body>
        <Card.Title>Album 1</Card.Title>

        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:'10rem'}}>
      <Card.Img variant="top" src={alb1} />
      <Card.Body>
        <Card.Title>Album 2</Card.Title>

        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,margin:'10rem'}}>
      <Card.Img variant="top" src={alb1} />
      <Card.Body>
        <Card.Title>Album 2</Card.Title>

        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
      </div>
     
    </div>
          
    </div>
  );
}

export default App;
