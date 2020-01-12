import React,{Component} from 'react';
import {Consumer} from '../contextapi';
import Carts from './cartss'
class Cart extends Component {
    render(){
        return(
            <Consumer>
                {value=>{
                   if(value.cart.length <= 0){
                       
                      return (
                      <div id="emptycart">
                      <img src="https://image.flaticon.com/icons/svg/2038/2038854.svg" id="emptyimg"/>
                      <h2 id="empty">Nothing in the cart yet go "SHOP AND FILL ME"</h2>
                      </div>)
                   }else{
                      return <Carts value={value}/>
                      }
                   }
                   
                }
          
            </Consumer>
        )
    }
}

export default Cart;