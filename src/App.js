import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import NavbarMine from './components/Navbar';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemListContainer from './components/ItemListContainer';
import Error from './components/Error';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import { CartProvider } from './components/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { dataBase } from './firebase/Config';
import products from './utils/Products';

function App() {

    // const uploadProducts = () => {
    //   products.forEach( el => {
    //     addDoc(collection(dataBase, "products"), el)
    //   })
    // }

  return (
    <div> 
        <CartProvider>
          <BrowserRouter>
        <NavbarMine/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/details/:itemId' element={<ItemDetailsContainer/>}></Route>
            <Route path='/nosotros' element={<Nosotros/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/detail/:itemId' element={<ItemDetailsContainer/>} ></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </BrowserRouter>
        </CartProvider>

       {/* <button onClick={uploadProducts}>Apretame</button> */}

      
    </div>
  );
}
export default App;
