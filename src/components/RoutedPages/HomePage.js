import React from "react";
import { Nav,Card,Container,Navbar,Button,Image} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const HomePage=()=>{
return  (
    <div>
        <Navbar style={{background:'black',border:'2px',borderColor:'white',display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
    <Container>
    
<Nav style={{background:'black',border:'2px',borderColor:'white' ,justifyContent:'center'}} className="justify-content-center" activeKey="/home">

<NavLink  to="/home" href="#home" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >HOME</NavLink>
<NavLink to="/" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >STORE</NavLink>
<NavLink  to="/about" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>ABOUT</NavLink>

</Nav>



</Container>
</Navbar>

<Card style={{ width: '98rem',textAlign:'center',height:'20rem', fontFamily:'fantasy', 
fontSize:'xx-large',color:'white',background:'grey' }}>
<Card.Body style={{marginright:'5rem'}}>
<Card.Title style={{fontSize:'7rem' ,fontFamily:'cursive'}}>THE GENERICS</Card.Title>
<Button variant="outline-info" style={{fontSize:'20px'}}>Get Our Latest Album</Button><br/>
<Image style={{width:'3rem',height:'3rem'}}
 src='https://media.istockphoto.com/id/1705965906/photo/blue-play-button-on-black-background-start-button-neon-glowing-play-button-neon-glowing-play.jpg?s=1024x1024&w=is&k=20&c=lGiydzDuR6HRCUuhL5lBlTGEyzr3MbITOrbf10GPPhg='></Image>
</Card.Body>

</Card>
<h1 style={{textAlign:'center'}}>TOURS</h1>
<br/>
      <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
        <ul>
    {[{date:"Jul 16", city:"toronto", description:"hello toronto"},
    {date:"Jul 16", city:"NewYork", description:"hello newyork"}, 
    {date:"Jul 16", city:"NewYork", description:"hello newyork"}, 
    {date:"Jul 16", city:"NewYork", description:"hello newyork"}, 
    {date:"Jul 16", city:"NewYork", description:"hello newyork"}].map((item)=>{
     return  <><li >{item.date} {item.city} {item.description}  
      <Button variant="primary" size="sm">Buy Ticket</Button></li><hr/></>
     
    })
    }</ul>
      </div>
      <Card style={{ width: '98rem',textAlign:'left',height:'8rem', fontFamily:'fantasy',
       fontSize:'xx-large',color:'white',background:'blue' }}>
<Card.Body>
<Card.Title style={{fontSize:'5rem' ,fontFamily:'cursive'}}>The Generics</Card.Title>
</Card.Body>
</Card>
        </div>)
} 

export default HomePage;