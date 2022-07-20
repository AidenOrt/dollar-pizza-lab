import React from 'react';
import Navbar from './components/navbar';
import Pizza from './components/pizza';
import Menu from './components/menu';
import './App.css';
import Footer from './components/Footer.js';

function App() {
  return(
    <div className="App">
     <Navbar/>
     <Pizza/>
     <Menu/>
     <Footer/>
    </div>
  );
}

export default App;
