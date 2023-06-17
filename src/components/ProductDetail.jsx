import React from "react";
import { useEffect, useState, useContext } from "react";
import {  useParams } from "react-router-dom";
import { getProductById } from "../Fetcher";
import { CartContext } from "../context/CartContext";


const ProductDetail = () => {
    const [product ,setProduct] = useState({errorMessage:"", data: {}});
    const {productId} = useParams();
    const cartContext = useContext(CartContext);
    const {addProduct} = cartContext;

     useEffect(()=>{
        const fetchData = async () => {
            const resData = await getProductById(productId);
            setProduct(resData);
        }
        fetchData();
    },[productId]);

   if (product.data.spec) {
    return(
        
        <article className="single-product">
        <div className="single-product-tittle">
             <h1>{product.data.title}</h1>
            <figure>
            <div className="single-product-img">
                <img src={`../images/${product.data.image}`} alt={"tittle"} />
            </div>
        </figure>
        </div>

        <aside className="product-detail">
            <div>
             <div className="product-dimension">
                 <h3>dimensions</h3>
                {product.data.spec.dimensions}
             </div>
             <div className="product-discription">
              <h3>capasity</h3>
               {product.data.spec.capasity}
             </div>
            </div>
        </aside>

        <aside className="product-finance">
            <div>
            <div className="product-price">
                &pound;{product.data.price}
            </div>
            <div className="product-stock">
                <label >stock level : {product.data.stock}</label>
                <label >free delivery</label>
            </div>
            <div className="btn">
                <button onClick={()=>addProduct({
                    id:product.data.id,
                    title:product.data.title,
                    price:product.data.price
                })}>add to basket</button>
            </div>
            </div>
        </aside>

    </article>
    )
   }
   else {
    return <h2>loading</h2>
   }

}


export default ProductDetail;