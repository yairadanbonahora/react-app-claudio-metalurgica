import logo from './logo.png';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';
import NavbarMine from './components/Navbar';

function App() {
  return (
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <NavbarMine/>
      </header>
      
  );
}
export default App;
