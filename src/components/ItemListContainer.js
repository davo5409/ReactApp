import {collection, getDocs} from 'firebase/firestore';
import {useState, useEffect  } from 'react';
import {db} from '../index';
import ItemList from './ItemList';

const ItemListContainer =() => {
    const [empanadas, setEmpanadas] = useState([])
    useEffect(()=>{
        const itemsCollection =
        collection(db, "empanadas")
        getDocs(itemsCollection)
        .then((res)=>{
            const list =
            res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setEmpanadas(list)
        })
        .catch((error)=>console.log(error))
    
},[])

return (
    <div>
        <ItemList empanadas={empanadas}/>
    </div>
)

}

export default ItemListContainer;