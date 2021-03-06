import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import {Carrusel} from './components/Carrusel/Carrusel'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import { CartProvider } from './Context/CartContext';
import { Checkout } from './components/Checkout/Checkout';
import { Footer } from './components/Footer/Footer';




function App() {
  return (
    <CartProvider>
      
      <BrowserRouter>
        <NavBar/>
        
        <Carrusel/>
        
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:catId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/cart" element={ <CartView /> } />
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>

        <Footer/>

      </BrowserRouter>
    </CartProvider>
    
    
    

  );
}

export default App;
