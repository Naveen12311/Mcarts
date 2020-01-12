import React,{Component} from 'react';
import {Consumer} from '../contextapi';
import './index.css';
import {Link} from 'react-router-dom';
class DetailPage extends Component{
    render(){
        return(
            <Consumer>
                {value=>{
                const {id,name,model,price,description,image,features,inCart}=value.detailProduct;
                return (
                    <div className="detailPage" key={id}>
                    <div id="detailName">
                    {name}  {model}
                    </div>
                    <div id="box">
    
                    <img src={image} id="detailImage"/>
                    <div id="features">
                <div id="price"><b>PRICE:</b>{price}</div>
                
                <div id="displaysize"><b>Display Size:</b> {features.map(fea=>{return fea.Display_Size})}</div>
                    <div id="ram"><b>Ram: </b>{features.map(fea=>{return fea.ram})}</div>
                    <div id="storage"><b>Storage:</b> {features.map(fea=>{return fea.Internal_Storage})}</div>
                    <div id="operating"><b>Operating System: </b>{features.map(fea=>{return fea.Operating_System})}</div>
                    <div id="ghz"><b>GHZ: </b>{features.map(fea=>{return fea.Primary_Clock_Speed})}</div>
                    <div id="camera"><b>Camera: </b>{features.map(fea=>{return fea.front_camera})}/{features.map(fea=>{return fea.back_camera})}</div>
                    <div id="battery"><b>Battery: </b>{features.map(fea=>{return fea.Battery})}</div>
                <div id="descriptiondetail"><b>Description :</b> {description}</div>
                <Link to="/Products">
                <button className="cartbutton"><i className="fas fa-backward"></i> Back to products</button>
                </Link>
                <button className="cartbutton" onClick={()=>{value.addtocart(id);value.openmodal(id)}} disabled={inCart?true:false}>
                 {inCart?<p id="addedcart"><i className="fas fa-plus"></i> ADDED TO CART</p>:<i className="fas fa-cart-plus">Add to cart</i>}
               </button>
                </div>
                    </div>
                   
                </div>
                )
                }}
       
            </Consumer>
        )
    }
}

export default DetailPage