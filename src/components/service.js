import React from "react";  
import Banner5 from '../css/images/banner5.png';
import delivery from '../css/images/image006.jpg';  
import visits from '../css/images/floral-deliverease-6.jpg';
import bod from '../css/images/image007.jpg';
import TitleLogo from '../css/images/titlelogo.png'; 
import '../css/landing.css';

const service =(props)=>{    

    return(
        <div >
            <div className="banner" > 
                <img   src={Banner5} alt="banner" className=" mySlides"/>  
            </div> 
            <div className="bhead">
                <h1>~ OUR SERVICES ~</h1>
                <img src={TitleLogo} alt="content" className="imgtag2"/>
                <h2>:::Surprice Your Special One, We Got Your Back !:::</h2> 
            </div>
            <div  > 
                <div className="serviceitem">
                    <h1 className="itemTitle">Delivery</h1> 
                    <img src={delivery} alt="content" className="imgtag"/>
                    <h4 className="feedTitle3">
                    We are currently only able to deliver to the following cities/localities. 
                    Please see below for our list of charges for each of the cities/localities.
                    <br/><br/>
                    Same day delivery option is now available for selected products around Colombo Outlet.
                    <br/><br/>
                    You have to place your order before 10 am on that day for the order to be accepted. 
                    Please contact us if you find it difficult to add the same-day option.
                    </h4>
                    <table className="tbl">
                    <thead>
                        <tr>
                            <th>
                                City
                            </th>
                            <th>
                                Charge (LKR)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Colombo</td>
                            <td>1200</td>
                        </tr>
                        <tr>
                            <td>Gampaha</td>
                            <td>2200</td>
                        </tr>
                        <tr>
                            <td>Homagama</td>
                            <td>1800</td>
                        </tr>
                        <tr>
                            <td>Kottawa</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>Maharagama</td>
                            <td>800</td>
                        </tr>
                        <tr>
                            <td>Nugegoda</td>
                            <td>500</td>
                        </tr>
                    </tbody>
                    </table>
                </div> 
                <div className="serviceitem">
                    <h1 className="itemTitle">Visits</h1> 
                    <img src={visits} alt="content" className="imgtag"/>
                    <h4 className="feedTitle3">
                        A spectacular floral arrangement for any occasion fills one's mind happy. If it is a wedding ceremony flower decoration is an essential part, as you start your life's new journey surrounded by beauty and fragrance of nature.
                        <br/><br/>
                        As well experienced florists we offer attractive flower arrangements to suit any kind of occasion from traditional styles to modern. This web site will give an idea of what we have already done with our floral arrangements in a creative way.
                    </h4>
                </div> 
                <div className="serviceitem">
                    <h1 className="itemTitle">B'th Day</h1>
                    <img src={bod} alt="content" className="imgtag"/>
                    <h4 className="feedTitle3">
                    Make sure that the person whose birthday you're celebrating feels all your love and warmth and sees around them the beauty of the world and their inner selves reflected with some fabulous flower decoration for birthday
                    </h4>
                </div> 
                 
            </div> 
        </div>
    )
}

export default service;