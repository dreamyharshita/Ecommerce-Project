import React from "react";
import { Image,Card } from "react-bootstrap";
import Header from "../UI/Header/Header";


const AboutPage=()=>{
    return (
        <div>
            <Header />
            <h1 style={{ textAlign: 'center', fontFamily: 'monospace' }}>About Us</h1>
            <div style={{display:'flex', flexWrap:'wrap' ,justifyContent:'space-between'}}>
                
                <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" style={{width:'6rem' ,height: '6rem'}} roundedCircle />
                
                <p style={{ fontSize: 'sm', fontFamily:'cursive'}}>The Generics Goodies Band originated in 1989 with two members, Gary "The Frog" Swanson and Ray Schnarr. With the "Frog" on keyboards and Schnarr on guitar and vocals, they needed some rhythm, they added "The Great Piersono" for drums and laughs. As time has progressed the band has evolved into a multimusical extravaganza covering music from the forties to the nineties spread over a vast range of genres from country to pop rock. The current nucleus of the band consists of Gary "The Frog" Swanson, keyboards; Ray Schnarr "Schnarsky" guitar & vocals; Ray "The Great Piersono" Pierson percussion and humor, Larry "Uncle Lar" Kuepker, drums, vocals & Chicken Suit, Marilyn, "Tape Lady." Younger saxophone, Virjean "Sweetie" Haywood, vocals John "Jonny" Loftus , Lead Guitar. The band increases in size up to 9 or 10 pieces depending on the gig requirement. This album is a culmination of all the years and all the members who have contributed to the fun and good music and entertainment that has been this bands quest to provide since its inception in 1989. Thanks to all who have listened, laughed, danced and applauded our efforts to make you forget your problems for just a few hours, this ones for you.</p>
                
                </div>
                <Card style={{ width: '98rem',textAlign:'left',height:'8rem', fontFamily:'fantasy', fontSize:'xx-large',color:'white',background:'blue' }}>
<Card.Body>
<Card.Title style={{fontSize:'5rem' ,fontFamily:'cursive'}}>The Generics</Card.Title>
</Card.Body>
</Card>
            
        </div>
    )
}

export default AboutPage;



