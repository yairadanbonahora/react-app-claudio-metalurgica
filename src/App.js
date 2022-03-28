import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';
import { BrowserRouter , Routes, Route, MemoryRouter } from 'react-router-dom';
import NavbarMine from './components/Navbar';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import ItemListContainer from './components/ItemListContainer';
import Error from './components/Error';
import ItemDetailsContainer from './components/ItemDetailsContainer';

function App() {
  return (
    <div>    
        <BrowserRouter>
        <NavbarMine/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/details/:itemId' element={<ItemDetailsContainer/>}></Route>
            <Route path='/nosotros' element={<Nosotros/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='/detail/:itemId' element={<ItemDetailsContainer/>} ></Route>
            {/* <Route path='*' element={<Error/>}></Route> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
