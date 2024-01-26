import { useEffect, useState } from 'react';
import { getProductByCategory } from "../services";
import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";



export const useGetProducts = () => {
    const [productsData, setProductsData] = useState([]);
        useEffect(() => {
            const db = getFirestore();

            const productsCollection = collection(db, 'productos');

            getDocs(productsCollection).then((snapshot) => {
                setProductsData(
                    snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
                )

            })
        }, [])
   
    return { productsData };
};

export const useGetProductById = (id) => {

    const [productData, setProductData] = useState([]);

    useEffect (() => {
        const db = getFirestore();
        const docRef = doc(db, 'productos', id)

        getDoc(docRef).then((doc) => {
            setProductData({ id: doc.id, ...doc.data() })
        })
        }, [] );

    return { productData }


}

export const useGetProductByCategory = (category) => {
    const [productsData, setProductsData] = useState([]); 

    useEffect (() => {
        getProductByCategory(category)
        .then((response) => {
            console.log(response)
            setProductsData(response.data.products);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [category]);

    return { productsData };
};