import React,{Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom'
import {Consumer} from '../contextapi';
class Modal extends Component{
    render(){
        return(
            <Consumer>
                
                {value=>{
                    const openmodals = value.openmodals;
                    const {image,name,model,price} = value.modelcontent;
                 
                    if(!openmodals){
                        return null
                    }else{
                        return(
                        <div className="modalcard">
                        <div id="modalcontent">
                    <h3 id="modalname">{name} {model}</h3>
                           <img src={image} id="modalimage"/>
                    <div id="modalprice">Price: {price}</div>
                    <Link to="/Products">
                <button className="cartbutton" onClick={()=>value.closemodal()}><i className="fas fa-backward"></i> Continue Shopping</button>
                </Link>
                <Link to ="/Cart">
                    <button className="cartbutton" onClick={()=>value.closemodal()}><p id="addedcart"><i className="fab fa-opencart"></i> Go to cart</p></button>
                    </Link>
                        </div>
                    </div>)
                    }
                 
                }}
         
            </Consumer>
        )
    }
}

export default Modal;