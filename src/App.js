import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home';
import Nosotros from './components/nosotros';
import CartWidget from './CartWidget';
import Contacto from './components/contacto';
import classnames from "classnames";
import Carrito from './Carrito';



export default function App() {

    return(
        <BrowserRouter>

        <Navbar/>
      <Routes>
      < Route exact path="/home" element={<Home />} />
      < Route exact path="/nosotros" element={<Nosotros />} />
      < Route exact path="/contacto" element={<Contacto />} />
      < Route exact path="/carrito" element={<CartWidget />} />
      < Route exact path="/cart/home" element={<CartWidget />} />
      < Route exact path="/cart/home" element={<CartWidget />} />
    

          
        </Routes>
        <ItemListContainer/>
       
        </BrowserRouter>       
       
     
 );


}
  

