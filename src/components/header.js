import React from "react"; 
import '../css/styles.css'
import '../css/header.css';
import {BrowserRouter,Route,Link} from "react-router-dom" 
import Bouquet from '../css/images/Bouquet.png'; 
import Landing from './landing' ;
import about from './about' ; 
import service from './service' ; 
import contact from './contact' ; 
import blog from './blog' ; 
 
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            page : window.sessionStorage.getItem("page")
        }
    }
    
    handleClick = (param) => { 
        console.log(param);
        if(param === "home"){
            window.sessionStorage.setItem("page", "home");
            this.setState({
                page: window.sessionStorage.getItem("page")
            }) 
        }if(param === "about"){
            window.sessionStorage.setItem("page", "about");
            this.setState({
                page:window.sessionStorage.getItem("page")
            }) 
        }if(param === "service"){
            window.sessionStorage.setItem("page", "service");
            this.setState({
                page:window.sessionStorage.getItem("page")
            }) 
        }if(param === "contact"){
            window.sessionStorage.setItem("page", "contact");
            this.setState({
                page:window.sessionStorage.getItem("page")
            }) 
        }if(param === "blog"){
            window.sessionStorage.setItem("page", "blog");
            this.setState({
                page:window.sessionStorage.getItem("page")
            }) 
        } 
        console.log("Page State = ",this.state.page);
      };

    render() { 
        return (
            <div> 
                <BrowserRouter> 
                <div>
                    <div className='logo'>  
                        <img src={Bouquet} alt="logo" className="headerimage"/> 
                        <div>
                            <Link to="" >
                                <div onClick={event => this.handleClick('home')} className={this.state.page==='home'?'navItemActive':'navItem'}>
                                    HOME
                                </div> 
                            </Link>
                            <Link to="/service">
                                <div onClick={event => this.handleClick('service')} className={this.state.page==='service'?'navItemActive':'navItem'}>
                                    OUR SERVICES
                                </div> 
                            </Link>
                            <Link to="/about">
                                <div onClick={event => this.handleClick('about')} className={this.state.page==='about'?'navItemActive':'navItem'}>
                                    ABOUT US
                                </div> 
                            </Link>
                            <Link to="/contact">
                                <div onClick={event => this.handleClick('contact')} className={this.state.page==='contact'?'navItemActive':'navItem'}>
                                    CONTACT US
                                </div> 
                            </Link>
                            <Link to="/blog">
                                <div onClick={event => this.handleClick('blog')}className={this.state.page==='blog'?'navItemActive':'navItem'}>
                                    BLOG
                                </div> 
                            </Link>   
                        </div>
                    </div>
                        <Route path="" exact component={Landing}></Route>
                        <Route path="/about" exact component={about}></Route>
                        <Route path="/service" exact component={service}></Route>
                        <Route path="/contact" exact component={contact}></Route>
                        <Route path="/blog" exact component={blog}></Route> 
                    </div>
                </BrowserRouter> 
            </div>
        )
    }
    
}
 

export default Header;