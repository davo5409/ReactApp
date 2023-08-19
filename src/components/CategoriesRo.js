import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getFirestore, doc, getDoc} from "firebase/firestore";
import { useEffect, useState, useParams } from 'react';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';


const CategoriesRo = ({stock, onAdd}) =>{
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
    <Card.Title>Roquefort </Card.Title>
    <Card.Text>$250</Card.Text>
    <Card.Text></Card.Text>
    <Button className='incrementar' variant='info' onClick={incrementar}>+</Button>{''}
  <span>{contador}</span>
  <Button className='disminuir' variant='info' onClick={disminuir}>-</Button>{''}
 
  <Button disabled={contador ===0} onClick={contador}>Comprar</Button>
  </Card.Body>
</Card>
</>
          </div>
        )
    
    }


export default CategoriesRo;








































