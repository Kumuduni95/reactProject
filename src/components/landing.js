import React from "react";  
import Banner5 from '../css/images/banner5.png';
import Arrangements from '../css/images/image004.jpg'; 
import Bunches from '../css/images/image003.jpg'; 
import Bridal from '../css/images/image001.jpg'; 
import Cakes from '../css/images/image005.jpg'; 
import Special from '../css/images/image002.jpg'; 
import TitleLogo from '../css/images/titlelogo.png'; 
import '../css/landing.css';

const Landing =(props)=>{    

    return(
        <div >
            <div className="banner" > 
                <img   src={Banner5} alt="banner" className=" mySlides"/>  
            </div> 
            <div className="bhead">
                <h1>~ LOOKING FOR A SPECIAL GIFT ~</h1>
                <img src={TitleLogo} alt="content" className="imgtag2"/>
                <h2>:::Check Our Collection:::</h2> 
            </div>
            <div  > 
                <div className="floweritem">
                    <h1 className="itemTitle">Arrangements</h1>
                    <img src={Arrangements} alt="content" className="imgtag"/>
                    <h4 className="feedTitle">Beautifully unique <br></br>fresh flower arrangement</h4>
                </div> 
                <div className="floweritem">
                    <h1 className="itemTitle">Bridal</h1>
                    <img src={Bridal} alt="content" className="imgtag"/>
                    <h4 className="feedTitle">Brides bouquet include Roses, <br></br>Babies breath, eucalyptus</h4>
                </div>
                <div className="floweritem">
                    <h1 className="itemTitle">Special</h1>
                    <img src={Special} alt="content" className="imgtag"/>
                    <h4 className="feedTitle">Delicate combination of <br></br>flowers</h4>
                </div> 
            </div>
             <div className="row">
                <div className="floweritem">
                    <h1 className="itemTitle">Bunches</h1>
                    <img src={Bunches} alt="content" className="imgtag"/>
                    <h4 className="feedTitle">Beautiful bouquet assorted fresh flowers,<br></br> perfect for any occasion!</h4>
                </div> 
                
                <div className="floweritem">
                    <h1 className="itemTitle">Cakes</h1>
                    <img src={Cakes} alt="content" className="imgtag"/>
                    <h4 className="feedTitle">Our own unique <br></br>collection of delicacy</h4>
                </div>  
             </div>
            
            
        </div>
    )
}

export default Landing;