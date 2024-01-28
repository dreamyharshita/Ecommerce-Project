import React from "react";
import {NavLink,useParams} from "react-router-dom";
import {Nav,Navbar,Container,Card} from "react-bootstrap"; 

const Album=()=>{

const params=useParams();
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
    

    const ProductHandler=()=>{
       
        for (let i in Products)
        {
            if (Products[i].id===params.pid)
            {
                return (<>
                <Card style={{padding:"30px"}}>
                   
                 <img style={{width:'60rem', height:'25rem', padding:'20px' }} src={Products[i].imageUrl} alt="" />
                 <h1 style={{alignText:"center",color:'red',fontSize:'3rem'}}>{Products[i].title}</h1>
                <h3>Price is Rs {Products[i].price}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolores similique iure reprehenderit voluptatem. Ratione, assumenda molestias neque soluta facere architecto impedit distinctio, voluptate tenetur quis mollitia nesciunt ipsam rerum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur dolor optio maiores ex laboriosam? Nisi, molestias perspiciatis illum voluptas at praesentium eaque tempore cum corporis, pariatur animi quisquam ex?</p>
                <h2>Reviews</h2>
                <p><li>nice but too costly</li> <li>higly recommended</li><li>I will rate it 4 stars</li></p>
            </Card>
                 
                </>)
            }
        }
    }
    return ( <>
    
    <Navbar style={{background:'black',border:'2px',borderColor:'white',display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
    <Container>
    
<Nav style={{background:'black',border:'2px',borderColor:'white' ,justifyContent:'center'}} className="justify-content-center" activeKey="/home">

<NavLink  to="/home" href="#home" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >
    HOME</NavLink>
<NavLink to="/" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}} >
    STORE</NavLink>
<NavLink  to="/about" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>
    ABOUT</NavLink>
    <NavLink  to="/contact" href="#about" style={{margin:'4px',color:'white',border:'2px' ,borderColor:'white'}}>
        CONTACT US</NavLink>
</Nav>
</Container>
</Navbar>
{ProductHandler()}
</>)
}

export default Album;