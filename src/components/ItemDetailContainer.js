import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer(){
    const {id} = useParams();
    const [ document, setDocument] = useState(null);

    useEffect(() => {
        const db = getFirestore();

        const documentRef = doc(db, "empanadas", id);

        getDoc(documentRef).then((snapshot) => {
            if (snapshot.exists()){
                const data = snapshot.data();
                const documento = {
                    id: snapshot.id,
                    ...data,
                };
            setDocument(documento);
            console.log(documento);
            }
        }).catch((err) => console.error(err));
    }, []);

    

    return (
    <div>
         <ItemDetail empanadas={document} /> detail : {id}
    </div>
    )
}

export default ItemDetailContainer;