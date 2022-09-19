import React from "react";    
import '../css/header.css';
import ftrImg from '../css/images/ftrImg.png';
class Footer extends React.Component{
      
    render() { 
        return (
            <div>  
                <div className="ftr">  
                
                <img src={ftrImg} alt="content" className="imgtag3"/>
                <br/>
                <span className="bhead2">Created By, Kumuduni P. Jayakody For Eduonix React Project<br/><br/>
                No templetes used<br/>all pure CSS and React</span>
                
                </div>
                
            </div>
        )
    }
    
}
 

export default Footer;