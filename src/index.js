import React from "react";
import ReactDOM from "react-dom";  
//components
import Header from './components/header';
import Footer from './components/footer';




class App extends React.Component {
    state={
        news:JSON
    }

    render(){
        console.log(this.state.news)
        return(
        <div>
             <Header></Header> 
               
             <Footer></Footer>
        </div>
    )
    }
}
ReactDOM.render(<App/>,document.querySelector("#root"));