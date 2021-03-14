import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Routes from './containers/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

  const [subType, setSubType] = useState("");
  const [cartCounter, updateCartCounter] = useState(0);

  const addToCart = (product) => {
    product.quantity += 1;
    updateCartCounter(cartCounter + 1);
  }

  const removeFromCart = (product) => {
    updateCartCounter(cartCounter - product.quantity);
    product.quantity = 0;
  }

  return (
    <div>
      <Header cartCounter={cartCounter}/>
      <Navbar setSubType={setSubType}/>
      <Routes addToCart={addToCart} removeFromCart={removeFromCart} subType={subType}/>  
      <Footer/>
    </div>
  )
}

export default App
