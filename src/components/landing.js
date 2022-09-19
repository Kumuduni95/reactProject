import React from "react";  
import Banner5 from '../css/images/banner5.png';
import Arrangements from '../css/images/image004.jpg'; 
import Arrangements1 from '../css/images/image0041.jpg';
import Arrangements2 from '../css/images/image0042.jpg';
import Arrangements3 from '../css/images/image0043.jpg';
import Arrangements4 from '../css/images/image0044.jpg';
import Arrangements5 from '../css/images/image0045.jpg';
import Bunches from '../css/images/image003.jpg'; 
import Bunches1 from '../css/images/image0031.jpg'; 
import Bunches2 from '../css/images/image0032.jpg'; 
import Bunches3 from '../css/images/image0033.jpg'; 
import Bunches4 from '../css/images/image0034.png'; 
import Bridal from '../css/images/image001.jpg'; 
import Bridal1 from '../css/images/image0011.jpeg'; 
import Bridal2 from '../css/images/image0012.png'; 
import Bridal3 from '../css/images/image0013.jpeg'; 
import Bridal4 from '../css/images/image0014.jpg'; 
import Cakes from '../css/images/image005.jpg'; 
import Cakes1 from '../css/images/image0051.jpg'; 
import Cakes2 from '../css/images/image0052.jpg'; 
import Cakes3 from '../css/images/image0053.JPG'; 
import Cakes4 from '../css/images/image0054.jpeg'; 
import Special from '../css/images/image002.jpg';
import Special1 from '../css/images/image0021.jpg';
import Special2 from '../css/images/image0022.jpg';
import Special3 from '../css/images/image0023.jpg';
import Special4 from '../css/images/image0024.jpg'; 
import TitleLogo from '../css/images/titlelogo.png';   
import '../css/landing.css';

class Landing extends React.Component {    
    constructor(props){
        super(props);
        this.state = { 
            page : window.sessionStorage.getItem("page"),
            Tile : "show",
            close: false
        }
    }
    handleTileClick = (param) => {  
        window.sessionStorage.setItem("Tile", param);
        this.setState({
            Tile:param,
            close: true
            // window.sessionStorage.getItem("Tile")
        }) 
        console.log("Tile",this.state.Tile)
    } 
    handleTileClick2 = (param) => {  
        window.sessionStorage.setItem("Tile", param);
        this.setState({
            Tile:"",
            close: false
            // window.sessionStorage.getItem("Tile")
        }) 
        console.log("Tile",this.state.Tile)
    } 
    
    render(){return(
        <div >
            <div className="banner" > 
                <img   src={Banner5} alt="banner" className=" mySlides"/>  
            </div> 
            <div className="bhead">
                <h1>~ LOOKING FOR A SPECIAL GIFT ~</h1>
                <img src={TitleLogo} alt="content" className="imgtag2"/>
                <h2>:::Check Our Collection:::</h2> 
            </div> 
            <div >
                <div className={this.state.close===true?'nofloweritem':''}>
                    <div >  
                    <div className="floweritem" onClick={event => this.handleTileClick('Arrangements')} >
                        <h1 className="itemTitle">Arrangements</h1>
                        <img src={Arrangements} alt="content" className="imgtag"/>
                        <h4 className="feedTitle">Beautifully unique <br></br>fresh flower arrangement</h4>
                    </div>  
                    <div className="floweritem" onClick={event => this.handleTileClick('Bridal')}>
                        <h1 className="itemTitle">Bridal</h1>
                        <img src={Bridal} alt="content" className="imgtag"/>
                        <h4 className="feedTitle">Brides bouquet include Roses, <br></br>Babies breath, eucalyptus</h4>
                    </div>
                    <div className="floweritem" onClick={event => this.handleTileClick('Special')}>
                        <h1 className="itemTitle">Special</h1>
                        <img src={Special} alt="content" className="imgtag"/>
                        <h4 className="feedTitle">Delicate combination of <br></br>flowers</h4>
                    </div> 
                    </div>
                    <div className="row">
                    <div className="floweritem" onClick={event => this.handleTileClick('Bunches')}>
                        <h1 className="itemTitle">Bunches</h1>
                        <img src={Bunches} alt="content" className="imgtag"/>
                        <h4 className="feedTitle">Beautiful bouquet assorted fresh flowers,<br></br> perfect for any occasion!</h4>
                    </div> 
                    
                    <div className="floweritem" onClick={event => this.handleTileClick('Cakes')}>
                        <h1 className="itemTitle">Cakes</h1>
                        <img src={Cakes} alt="content" className="imgtag"/>
                        <h4 className="feedTitle">Our own unique <br></br>collection of delicacy</h4>
                    </div>  
                    </div>
                </div> 

                <div className={this.state.close===false?'nofloweritem':''}>
                    
                    <div className="floweritem4">
                        <h1 className=" itemTitle">{this.state.Tile}</h1> 
                        <h2 className=" itemTitle2" onClick={event => this.handleTileClick2('Cakes')}>Go Back</h2> 
                        <div>
                             
                            <div>
                                <div className={this.state.Tile==='Arrangements'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">White Forest</h1>
                                    <img src={Arrangements1} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 11000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Arrangements'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Blue Shine</h1>
                                    <img src={Arrangements2} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 4000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Arrangements'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Pinkish Dinner</h1>
                                    <img src={Arrangements3} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 8000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Arrangements'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Your Choice</h1>
                                    <img src={Arrangements4} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 8000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Arrangements'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Royal Roses</h1>
                                    <img src={Arrangements5} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 15000.00 <br></br>Contact Us For Details</h4>
                                </div> 
                            </div> 

                            <div> 
                                <div className={this.state.Tile==='Bridal'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Yellow Rainbow</h1>
                                    <img src={Bridal1} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 11000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Bridal'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Roses</h1>
                                    <img src={Bridal2} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 10000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Bridal'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Angel Ring</h1>
                                    <img src={Bridal3} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 2000.00 <br></br>Contact Us For Details</h4>
                                </div> 
                                <div className={this.state.Tile==='Bridal'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Pure</h1>
                                    <img src={Bridal4} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 4500.00 <br></br>Contact Us For Details</h4>
                                </div> 
                            </div>

                            <div>
                                <div className={this.state.Tile==='Special'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Flower Heart</h1>
                                    <img src={Special1} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 5000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Special'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Pure Love</h1>
                                    <img src={Special2} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 10000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Special'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Choco Teddy</h1>
                                    <img src={Special3} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 12000.00 <br></br>Contact Us For Details</h4>
                                </div> 
                                <div className={this.state.Tile==='Special'?'floweritem2':'nofloweritem'}  >
                                    <h1 className="itemTitle">Surprice</h1>
                                    <img src={Special4} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 29000.00 <br></br>Contact Us For Details</h4>
                                </div>
                            </div> 

                            <div>
                                <div className={this.state.Tile==='Bunches'?'floweritem':'nofloweritem'}  >
                                    <h1 className="itemTitle">Sweet Beauty</h1>
                                    <img src={Bunches1} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 4000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Bunches'?'floweritem':'nofloweritem'}  >
                                    <h1 className="itemTitle">Sweet Beauty 2</h1>
                                    <img src={Bunches2} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 4000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Bunches'?'floweritem':'nofloweritem'}  >
                                    <h1 className="itemTitle">Sweet Beauty 3</h1>
                                    <img src={Bunches3} alt="Bunches" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 4000.00 <br></br>Contact Us For Details</h4>
                                </div> 
                                <div className={this.state.Tile==='Bunches'?'floweritem':'nofloweritem'}  >
                                    <h1 className="itemTitle">Baby Roses</h1>
                                    <img src={Bunches4} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 5000.00 <br></br>Contact Us For Details</h4>
                                </div>
                            </div> 

                            <div>
                                <div className={this.state.Tile==='Cakes'?'floweritem':'nofloweritem'}  >
                                    <h1 className="itemTitle">Who wants Choclate ?</h1>
                                    <img src={Cakes1} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 9000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Cakes'?'floweritem':'nofloweritem'}  >
                                    <h1 className="itemTitle">Snow Deal</h1>
                                    <img src={Cakes2} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 9000.00 <br></br>Contact Us For Details</h4>
                                </div>
                                <div className={this.state.Tile==='Cakes'?'floweritem':'nofloweritem'}  >
                                    <h1 className="itemTitle">CC Gateau</h1>
                                    <img src={Cakes3} alt="Bunches" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 10000.00 <br></br>Contact Us For Details</h4>
                                </div> 
                                <div className={this.state.Tile==='Cakes'?'floweritem':'nofloweritem'}  >
                                    <h1 className="itemTitle">Sweet-Fruits</h1>
                                    <img src={Cakes4} alt="content" className="imgtag"/>
                                    <h4 className="feedTitle">LKR : 12000.00 <br></br>Contact Us For Details</h4>
                                </div>
                            </div> 
                            
                        </div>
                    </div> 
                </div>
            </div> 
            
            
        </div>
    )
}
}

export default Landing;