import React from "react";
import {  useParams } from "react-router-dom";
import { getProducts } from "../Fetcher";
import Products from "./Products";
import { useEffect, useState } from "react";



const Category = ()=>{
    const [products ,setProducts] = useState(
        {
            errorMessage:"",
            data: []
        });
    const {categoryId} = useParams();

    useEffect(()=>{
        const fetchData = async () => {
            const resData = await getProducts(categoryId);
            setProducts(resData);
        }
        fetchData();
    },[categoryId]);

    const renderProducts= ()=>{
        return(products.data.map(p=> <Products {...p} key={p.id} />))
      }
    

    return (
        <>
        {products.errorMessage && <div> 
        Error : {products.errorMessage}</div>}   
        {products.data.length===0 && <div className='no-products'> <h1>no products of this category</h1></div>}
      {products.data && renderProducts()}
        </>

    )
}

export default Category;