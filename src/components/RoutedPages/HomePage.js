import React,{useState} from "react";
import { Nav,Card,Container,Navbar,Button,Image} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const HomePage=()=>{
 
  const [data,updatedata]=useState([]);
  const [loading,setLoading]=useState(false);
  const [err,setError]=useState(null);
  async function getData(){
    setError(null);
    setLoading(true);
    try{
      const response=  await fetch('https://swapi.dev/api/fil/');
      if(!response.ok){
   throw new Error('Something went wrong..retrying');
      }
     const response2= await response.json();
  updatedata(response2.results);
     console.log("in await");
    setLoading(false);
    }catch(error){
 setError(error.message);
 setLoading(false);
    }
  
     }
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
<Image style={{width:'3rem',height:'3rem'}}  onLoad={()=>{getData()}}
 src='https://media.istockphoto.com/id/1705965906/photo/blue-play-button-on-black-background-start-button-neon-glowing-play-button-neon-glowing-play.jpg?s=1024x1024&w=is&k=20&c=lGiydzDuR6HRCUuhL5lBlTGEyzr3MbITOrbf10GPPhg='></Image>
</Card.Body>

</Card>
<h1 style={{textAlign:'center'}}  >TOURS</h1>
<br/>
      <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
       
    <ul>
{ !loading && data.map((item)=>{
    return <> <li >{item.title}  
       <Button variant="primary" size="sm">Buy Ticket</Button></li><hr/></>
      
     })
}
{loading && <p style={{fontSize:'25px',fontWeight:'bold'}}>Loading...</p>}
{!loading && err && <p>{err}...<button onClick={()=>{
  setError(null);
  setLoading(false);
  
}}>cancel retrying</button></p>} 
{!err && !loading &&  <p>stopped retrying</p> }</ul>
 

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