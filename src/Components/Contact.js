import React from 'react';
import './index.css'
const Contact =()=>{
    return(
        <div className="Contact">
          <h4>CONTACT</h4>
          <div className="contactwrapper">
      <form>
        
     <input type="text" id="firstname" name="firstname" placeholder="NAME" required/>
    
     <input type="email" id="email" name="email" placeholder="EMAIL" required/>
   
     <input type="number" id="number" name="number" placeholder="PHONE NUMBER" required/>
     <textarea id="textarea" placeholder="MESSAGE"></textarea>
     <input type="submit" id="submit" value="SUBMIT"/>
   
      </form>
        </div>
        </div>
    )
}

export default Contact;