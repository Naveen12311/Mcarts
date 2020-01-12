import React,{Component} from 'react';
import Featurebar from './Features';
import Contact from './Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './slider';

class Homepage extends Component{
    render(){
        return(
           
      
            <div className="home">
           
           <Slider />
           <Featurebar />
           <Contact />
            </div>
           
        )
    }
}

export default Homepage;