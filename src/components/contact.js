import React from "react";  
import Banner5 from '../css/images/banner5.png';  
import Cakes from '../css/images/image003.jpg';  
import social from '../css/images/social2.png';
import TitleLogo from '../css/images/titlelogo.png'; 
import '../css/landing.css';

const contact =(props)=>{    

    return(
        <div >
            <div className="banner" > 
                <img   src={Banner5} alt="banner" className=" mySlides"/>  
            </div> 
            <div className="bhead">
                <h1>~ CONTACT US ~</h1>
                <img src={TitleLogo} alt="content" className="imgtag2"/>
                <h2>:::Don't Be Late..!:::</h2> 
            </div>
            <div className="row2">
            <div className="floweritem3">
                <h1 className="itemTitle">Eduonix&Bouquets</h1> 
                <h4 className="feedTitle3"> 
                    <span className="cntctTitle">Address:</span>
                    <br/>
                    William Gopallawa Mw,<br/>Huejay Court,<br/>No. 320B,<br/> Macan Marker<br/>Colombo 03<br/> Sri Lanka.
                    <hr></hr>
                    <br></br>
                    <span className="cntctTitle">Mobile:</span>
                    <br/>
                    +XX 456 12 45 22 56
                    <br/>
                    +XX 456 12 45 22 57
                    <hr></hr>
                    <span className="cntctTitle">Whatsapp:</span>
                    <br/>
                    +XX 456 12 45 22 56
                    <hr></hr>
                    <span className="cntctTitle">Email:</span>
                    <br/>
                    Eduonix&Bouquets@eduonix.com
                     </h4>
                     <img src={social} alt="content" className="imgtag5"/>
            </div> 
            
            <div className="floweritem3"> 
                <img src={Cakes} alt="content" className="imgtag"/> 
            </div>  
         </div>  
        </div>
    )
}

export default contact;