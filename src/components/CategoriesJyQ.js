import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getFirestore, doc, getDoc} from "firebase/firestore";
import { useEffect, useState, useParams } from 'react';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';
import CheckOut from '../checkout';
import { Link } from 'react-router-dom';



const CategoriesJyQ = ({stock, onAdd}) =>{
    const [contador, setContador] = useState(1);

    const incrementar = () =>{
        
            setContador(contador + 1)
        
    }
    const disminuir = () =>{
        
            setContador(contador -1)
        }

        return(
            <div>
    
    <>
    <Card>
  <Card.Img variant="top"/>
  <Card.Body>
    <Card.Title>Jamon y queso </Card.Title>
    <Card.Text>$200</Card.Text>
    <Card.Text></Card.Text>
    <Button className='incrementar' variant='info' onClick={incrementar}>+</Button>{''}
  <span>{contador}</span>
  <Button className='disminuir' variant='info' onClick={disminuir}>-</Button>{''}
 
  <Button disabled={contador ===0} onClick={CheckOut}>Comprar</Button>
   
  
  </Card.Body>
</Card>
</>
          </div>
        )
    
    }


export default CategoriesJyQ;












































