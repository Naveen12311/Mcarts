import React from 'react';
import {Consumer} from '../contextapi';

const Finalcart =()=>{
    return(
       <Consumer>
            {value=>{
                return <div className="finalcart">
            <div id="finaltotalprice"><b>TOTAL PRICE TO PAY: </b> {value.totalprices}</div>
            <div id="totlitems"><b>TOTAL ITEMS: </b> {value.totalcartitems}</div>
                <div id="delievry">FREE DELIVERY</div>
                <button id="clearcart" onClick={()=>value.clearcart()}>Clear Cart</button>
                </div>
           }}           
       </Consumer>
    )
}
export default Finalcart;