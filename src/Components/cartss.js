import React from 'react';
import './index.css';

import Finalcart from './finalcart';
const Cartitem = (value) =>{
   
   return(
       <div className="cartitems">
    
         {value.value.cart.map(items=>{
             return(
             <div className="cartitem" key={items.id}>
          <img src={items.image} id="cartimage" />
         
         <h5 id="cartname">{items.name} {items.model}</h5>
         <div id="cartprice">Rs:{items.price}</div>
         <div id="cartcount"><button id="decriments" onClick={()=>value.value.decriment(items.id)}> - </button>  {items.count}  <button id="incriments" onClick={()=>value.value.incriment(items.id)}> + </button></div>
         <div id="carttotal" >Rs:{items.total}</div>
         <div id="removecart" onClick={()=>value.value.removeitem(items.id)}><i className="fas fa-trash"></i></div>
         </div>
         )
         })}
    <Finalcart />
       </div>
   )
}

export default Cartitem;