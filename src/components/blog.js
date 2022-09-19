import React from "react";  
import Banner5 from '../css/images/banner5.png';
import partners from '../css/images/partners.png';
import branches from '../css/images/branches.jpg';  
import partners2 from '../css/images/partners2.png';  
import TitleLogo from '../css/images/titlelogo.png'; 
import '../css/landing.css';

const blog =(props)=>{    

    return(
        <div >
            <div className="banner" > 
                <img   src={Banner5} alt="banner" className=" mySlides"/>  
            </div> 
            <div className="bhead">
                <h1>~ BLOG ~</h1>
                <img src={TitleLogo} alt="content" className="imgtag2"/>
                <h2>:::Check Out Latest Blog Posts:::</h2> 
            </div>
            <div className="floweritem4">
                <h1 className="itemTitle">Our Newest Partners</h1> 
                <h4 className="feedTitle3">  
                    <span className="cntctTitle">Richerd and Sons PVT. LTD.</span>
                    <br/><br/>
                    <img src={partners} alt="content" className="imgtag6"/> 
                    
                    One of the best flower transport services in the country,<br/><br/>
                    There's no need to get your green thumb dirty when shipping plants.<br/><br/> 
                    Roadie delivers plants, flowers, trees, shrubs, door-to-door with care. <br/><br/>
                    Shipping plants and agricultural goods is easy.<br/><br/> 
                      
                </h4> 
                <h4 className="feedTitle3"> 
                    <span className="cntctTitle">www.garden.com</span>
                    <br/><br/>
                    <img src={partners2} alt="content" className="imgtag6"/> 
                    
                    we have provided a personal and reliable landscape design and garden Maintenance service throughout country.<br/><br/>
                    includes:- planting, care and maintenance<br/><br/> 
                    We offer unique solutions for landscaping both locally & internationally.  
                    <br/><br/><br/><br/>
                <hr></hr>
                POST: (staff) Mr.Jack Caoimhe <br></br>DATE: May 20, 2022, 8:15:30 am<br></br>
                </h4>  
            </div> 
            <div className="floweritem4">
                <h1 className="itemTitle">3 New Branches !</h1> 
                <h4 className="feedTitle3"> 
                    <span className="cntctTitle">Gampaha Branch</span>
                    <br/><br/>
                    <img src={branches} alt="content" className="imgtag6"/> 
                    Gampaha is an urban city in Gampaha District, Western Province.<br/>
                    <br/>  It is situated to the north-east of the capital Colombo.<br/><br/><br/><br/>
                     
                    
                </h4> 
                <h4 className="feedTitle3"> 
                    <span className="cntctTitle">Kottawa Branch</span>
                    <br/><br/>
                    <img src={branches} alt="content" className="imgtag6"/> 
                    
                    Kottawa is one of the main suburbs in Colombo and is administered by the Maharagama Urban Council.<br/><br/>
                     It is located 21 km from the centre of Colombo.<br/><br/><br/><br/>
                    
                </h4> 
                <h4 className="feedTitle3"> 
                    <span className="cntctTitle">Homagama Branch</span>
                    <br/><br/>
                    <img src={branches} alt="content" className="imgtag6"/> 
                    
                    Homagama is a town in the Colombo District, about 24 kilometres south-east of Colombo.<br/><br/>
                     The Homagama Pradeshiya Sabha consists of the Homagama divisional secretariat and 10 GN division of Padukka DS division.  
                     <br/><br/> 
                    <br/><br/><br/><br/>
                <hr></hr>
                POST: (staff) Mr.James O' Saoirse <br></br>DATE: January 20, 2022, 11:15:30 am<br></br>
                </h4>  
                
            </div> 
             
        </div>
    )
}

export default blog;