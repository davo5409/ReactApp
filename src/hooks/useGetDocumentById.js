import { useEffect, useState } from "react";

function useGetDocumentById(collectionName, id){
    const [document, setDocument] = useState(null);

    useEffect(() => {
        const db = getFirestore();

        const documentRef = doc(db,collectionName, id);

        getDoc(documentRef).then((snapshot) => {
            if (snapshot.exists()){
                const data = snapshot.data();
                const documento = {
                    id: snapshot.id,
                    ...data,
                };
            setDocument(documento);
            
            }
        }).catch((err) => console.error(err));
    }, []);

    return {document};
}

