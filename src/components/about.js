import React from "react";  
import Banner5 from '../css/images/banner5.png';
import price from '../css/images/p.png'; 
import design from '../css/images/d.png'; 
import quality from '../css/images/q.png'; 
import Cakes from '../css/images/image005.jpg';  
import TitleLogo from '../css/images/titlelogo.png'; 
import '../css/landing.css';

const about =(props)=>{    

    return(
        <div >
            <div className="banner" > 
                <img   src={Banner5} alt="banner" className=" mySlides"/>  
            </div> 
            <div className="bhead">
                <h1>~ ABOUT US ~</h1>
                <img src={TitleLogo} alt="content" className="imgtag2"/>
                <h2>:::We Were There For You Since !:::</h2> 
            </div>
            <div className="row2">
                <div className="floweritem3">
                    <h1 className="itemTitle">Eduonix&Bouquets</h1> 
                    <h4 className="feedTitle3">
                        Pioneering the art of designing the perfect floral settings to captivate and awaken a thousand emotions,
                        <br/>
                        <br></br>
                        We deliver quality service to the client base while diversifying their business areas.
                        <br/>
                        We provide many services related to event management including wedding arrangements, floral arrangements, corporate event arrangements etc.
                        <br/>
                        We are capable of providing a full featured event organizing package under one roof.
                        <br/>
                        With the experienced and the well trained staff of Ours, customers would get an excellent service that they will never forget.
                    </h4>
                </div> 
                
                <div className="floweritem3"> 
                    <img src={Cakes} alt="content" className="imgtag"/> 
                </div>  
             </div>
            <div> 
            <div>
                <div className="bhead">
                    <h1>  Why Eduonix&Bouquets </h1>  
                </div>
            </div>
                <div className="floweritem2">
                    <h1 className="itemTitle">Unparalleled Quality</h1>
                    <img src={quality} alt="content" className="imgtag4"/>
                    <h4 className="feedTitle4">Since inception, our range of flowers has captured the hearts of many. Fresh, vibrant, and bursting with colours, our flowers are grown in our very own farm in a wide range of varieties. The superior quality of our flowers stems from our years of experience in the cut-flower industry, utilizing both international and local expertise of our team of growers.</h4>
                </div> 
                <div className="floweritem2">
                    <h1 className="itemTitle">Competitive Prices </h1>
                    <img src={price} alt="content" className="imgtag4"/>
                    <h4 className="feedTitle4">We at duonix&Bouquets have an unbridled passion for farm fresh flowers. Having the largest floricultural farms operation allows us to utilize economies of scale thus bringing down the cost of each flower grown b us. Consequently, our flowers are fresher and reasonably priced catering to all budgets, from a single stem to a large and dazzling arrangement.</h4>
                </div>
                <div className="floweritem2">
                    <h1 className="itemTitle">Innovative Designs </h1>
                    <img src={design} alt="content" className="imgtag4"/>
                    <h4 className="feedTitle4">Abundant textures, stunning colors, and inspired design unite to make an arrangement extraordinary and that is exactly what our team of designers are dedicated to achieving. Our creative flair and passion towards design is one of the unique advantages at Eduonix&Bouquets, a trait which we are widely renowned for. We follow international trends and constantly upgrade our flower designs to delight our customers, coupled with regular staff trainings by professional florists from around the world.</h4>
                </div> 
            </div>
             
            
            
        </div>
    )
}

export default about;