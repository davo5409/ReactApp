import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home';
import Nosotros from './components/nosotros';
import CartWidget from './CartWidget';
import Contacto from './components/contacto';
import classnames from "classnames";
import Carrito from './Carrito';
import CheckOut from './checkout';
import ItemDetailContainer from './components/ItemDetailContainer';



export default function App() {

    return(
        <BrowserRouter>

        <Navbar/>
      <Routes>
      < Route exact path="/" element={<Home />} />  
      < Route exact path="/home" element={<Home />} />
      < Route exact path="/nosotros" element={<Nosotros />} />
      < Route exact path="/contacto" element={<Contacto />} />
      < Route exact path="/carrito" element={<CartWidget />} />
      < Route exact path="/cart/home" element={<CartWidget />} />
      < Route exact path="/cart/home" element={<CartWidget />} />
      < Route exact path="/cart" element={<CartWidget />} />
      < Route exact path="/empanadas/:id" element={<ItemDetailContainer/>} />

    

          
        </Routes>
        <ItemListContainer/>
       
        </BrowserRouter>       
       
     
 );


}
  

