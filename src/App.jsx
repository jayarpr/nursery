import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Routes from './containers/Routes';
import styles from './App.module.scss'
import Header from './components/Header';

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
    </div>
  )
}

export default App
