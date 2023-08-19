import React from 'react';
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return (
        <Card className='card'>
        <Card.Img variant="top" src={prod.imagen} />
        <Card.Body>
          <Card.Title>{prod.producto} </Card.Title>
          <Card.Text>${prod.precio}</Card.Text>
          <Card.Text>Stock: {prod.stock}</Card.Text>
          <Button as={Link} to={`/empanada/${prod.id}`} >Ir al detalle</Button> 
        </Card.Body>
      </Card>
    )
}

export default Item;