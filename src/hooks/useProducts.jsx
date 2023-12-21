import { useEffect, useState } from 'react';
import { getProducts } from "../services";

export const useGetProducts = () => {
    const [productsData, setProductsData]= useState([]);

    useEffect (() => {
        getProducts(5)
        .then((response) => {
          setProductData(response.data.products);
        })
        .catch((error) =>{
          console.log(error);
        })
    
      }, [] );

      return { productsData }
}
