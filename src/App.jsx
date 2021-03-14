import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Routes from './containers/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

  const [subType, setSubType] = useState("");
  const [cartCounter, setCartCounter] = useState(0);

  const incrementCartCounter = () => {
    const incremented = cartCounter + 1;
    setCartCounter(incremented);
  }

  return (
    <div>
      <Header cartCounter={cartCounter}/>
      <Navbar setSubType={setSubType}/>
      <Routes addToCart={incrementCartCounter} subType={subType}/>  
      <Footer/>
    </div>
  )
}

export default App
