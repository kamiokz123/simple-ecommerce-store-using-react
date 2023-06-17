import React, {useEffect,useState} from "react";
import { useSearchParams } from "react-router-dom";
import { getProductByQuery } from "../Fetcher";
import Products from "./Products";

const SearchResult = () => {
    const [products ,setProducts] = useState(
        {
            errorMessage:"",
            data: []
        });
    const [searchParams]= useSearchParams();
    // console.log("params : ",searchParams);
    const query = searchParams.get("s");
    console.log("query : ",query);

    useEffect(()=>{
        const fetchData = async () => {
            const resData = await getProductByQuery(query);
            setProducts(resData);
        }
        fetchData();
    },[query]);

    const renderProducts= ()=>{
        return(products.data.map(p=> <Products {...p} key={p.id} />))
      }

    

    return(
        <>
        {products.errorMessage && <div> 
        Error : {products.errorMessage}</div>}   
        {products.data.length===0 && <div className='no-products'> <h1>no products of this category</h1></div>}
      {products.data && renderProducts()}
        </>
    )
}

export default SearchResult;