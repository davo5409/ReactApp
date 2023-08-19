import ItemCount from "./ItemCount";

function ItemDetail( {empanadas} ) {
const onAdd = (cantidad) => {
    console.log(cantidad)
}

    return (
    <div>
      <div> {empanadas.producto} </div>
      <div> {empanadas.precio} </div>   
      < ItemCount stock={empanadas.stock}
      onAdd={onAdd}/>

    </div>)

}

export default ItemDetail;