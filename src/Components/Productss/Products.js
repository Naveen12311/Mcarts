import React,{Component} from 'react';
import {Consumer} from '../../contextapi';
import '../index.css';
import Product from './product';
class Productss extends Component{

    render(){
     
        return(
            <div className="products">
                <div id="card">
                  <Consumer>
                      {(value)=>{
                       return value.products.map(prod=>{
                       return <Product key={prod.id} Product={prod} />
                       })
                      }}
                  </Consumer>
                </div>
            </div>
        )
    }
}

export default Productss;