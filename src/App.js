import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home';
import Nosotros from './components/nosotros';
import Contacto from './components/contacto';
import Carrito from './Carrito';
import CheckOut from './checkout';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoriesJyQ from './components/CategoriesJyQ';
import CategoriesVer from './components/CategoriesVer';
import CategoriesPo from './components/CategoriesPo';
import CategoriesHu from './components/CategoriesHu';
import CategoriesCa from './components/CategoriesCa';
import CategoriesRo from './components/CategoriesRo';
import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';
import ItemCount from './components/ItemCount';
import Item from './components/Item';



export default function App() {

    return(
        <BrowserRouter>

        <Navbar/>
      <Routes>
      < Route exact path="/" element={<Home />} />  
      < Route exact path="/home" element={<Home />} />
      < Route exact path="/nosotros" element={<Nosotros />} />
      < Route exact path="/contacto" element={<Contacto />} />
      < Route exact path="/empanadas/:id" element={<ItemDetailContainer/>} />
      < Route exact path="/cart" element={<Carrito />} />
      < Route exact path="/checkout" element={<CheckOut />} />
      < Route exact path= "/empanada/GA78Kb4Xtpjs18UATHPu"  element={< CategoriesJyQ/>} />
      < Route exact path= "/empanada/Bj9Vp60h9mtSeGOXRHPm"  element={ <CategoriesVer/>} />
      < Route exact path= "/empanada/IwrNmzqYk7aiSSwHUZOn"  element={< CategoriesHu/>} />
      < Route exact path= "/empanada/LUivPYwwWkBubnBziWOu"  element={< CategoriesCa/>} />
      < Route exact path= "/empanada/am1DSBGYikn8yZOjK5m4"  element={< CategoriesPo/>} />
      < Route exact path= "/empanada/y9H0BT6D7UADxuJNZ9xZ"  element={< CategoriesRo/>} />
               
        </Routes>
       
        </BrowserRouter>       
       
     
 );


}
  

