import React,{useState,useEffect, useCallback} from "react";
import { Nav,Card,Container,Navbar,Button,Image} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import TicketModal from "../UI/TicketModal";
import th from "./../../assests/th.png";
const HomePage=()=>{
 
  const [data,updatedata]=useState([]);
  const [loading,setLoading]=useState(false);
  const [err,setError]=useState(null);
  const[cancel,setCancel]=useState(false);
  const[showmodal,setShowmodal]=useState(false);
  const[ticket,setdata]=useState('');
  
 
  
 const getData=useCallback(async ()=>{
    setError(null);
    setLoading(true);
    try{
      const response=  await fetch('https://swapi.dev/api/films/');
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
  
     },[]);

     useEffect(() => {
      getData();
    }, [getData]);
  
return  (
    <div>
        <Navbar style={{background:'darkblue',border:'2px',borderColor:'white',display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
    <Container>
    
<Nav style={{background:'darkblue',border:'2px',borderColor:'white' ,justifyContent:'center'}} className="justify-content-center" activeKey="/home">

<NavLink  to="/home" href="#home" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >HOME</NavLink>
<NavLink to="/" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >STORE</NavLink>
<NavLink  to="/about" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>ABOUT</NavLink>
<NavLink  to="/contact" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>CONTACT US</NavLink>
</Nav>



</Container>
</Navbar>

<Card style={{ width: '98rem',textAlign:'center',height:'20rem', fontFamily:'fantasy', 
fontSize:'xx-large',color:'white',background:'blue' }}>
<Card.Body style={{marginright:'5rem'}}>
<Card.Title style={{fontSize:'7rem' ,fontFamily:'cursive'}}>THE GENERICS</Card.Title>
<Button variant="outline-info" style={{fontSize:'20px'}}  onLoad={()=>{getData()} }>Get Our Latest Album</Button><br/>

<Image style={{width:'3rem',height:'3rem',marginTop:'1rem'}}src={th}></Image>
</Card.Body>

</Card>
<h1 style={{textAlign:'center'}}  >TOURS</h1>
<br/>
      <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
       
    <ul>
{ !loading && data.map((item)=>{
    return <> <li >{item.title}  
       <Button variant="primary" size="sm" onClick={(e)=>{
        e.preventDefault();
console.log("buttonclicked")
       setShowmodal(!showmodal);
       const title=item.title;
       setdata(title);
       }}>Buy Ticket</Button></li><hr/></>
      
     })
     
}
{showmodal && <TicketModal show="true" heading={ticket}></TicketModal>}

{loading && <p style={{fontSize:'25px',fontWeight:'bold'}}>Loading...</p>}
{!loading && err && <p>{err}...<button onClick={()=>{
  setError(null);
  setLoading(false);
  setCancel(!cancel);

}}>cancel retrying</button></p>} 
{!err && !loading && cancel && <div>{alert("stopped retrying")}</div> }</ul>
 

      </div>
      <Card style={{ width: '98rem',textAlign:'left',height:'8rem', fontFamily:'fantasy',
       fontSize:'xx-large',color:'white',background:'cornflowerblue' }}>
<Card.Body>
<Card.Title style={{fontSize:'5rem' ,fontFamily:'cursive'}}>The Generics</Card.Title>
</Card.Body>
</Card>
        </div>)
} 

export default HomePage;