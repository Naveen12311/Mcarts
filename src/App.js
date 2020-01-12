import React from 'react';
import Navbar from './Components/navbar';
import Home from './Components/index';
import './App.css';
import Productss from './Components/Productss/Products';
import Abouts from './Components/About';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Footer';
import Cart from './Components/cart';
import Footer from './Components/Footer';
import DetailPage from './Components/Detailpage';
import Modal from './Components/Modal';
function App() {
  return (
    <Router>
       <Navbar />
    <Route exact path="/" strict component={Home}/>
    <Route exact path="/Products" component={Productss} />
    <Route exact path="/About" component={Abouts} />
    <Route excat path="/Cart" component={Cart} />
    <Route excat path="/Details" component={DetailPage} />
    <Modal />
    <Footer />
    </Router>
   
  );
}

export default App;
