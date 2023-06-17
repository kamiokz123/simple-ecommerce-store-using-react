import React , {useContext} from "react";
import { Link , useNavigate} from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Products = ({
        id,
        title,
        image,
        spec,
        price,
        stock
    })=>{
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const {addProduct} = cartContext;
    return (
        <article id="all-product-detail">
            <div className="product-tittle">
            <Link to={`/products/${id}`} >  <h1>{title}</h1> </Link>
                <figure>
                <div className="product-img">
                    <img src={`/images/${image}`} alt={title} />
                </div>
            </figure>
            </div>

            

            <aside className="product-detail">
                <div>
                <div className="product-dimension">
                    <h3>dimensions</h3>
                    {spec.dimensions}
                </div>
                <div className="product-discription">
                    <h3>capasity</h3>
                    {spec.capasity}
                </div>
                </div>
            </aside>

            <aside className="product-finance">
                <div>
                <div className="product-price">
                    &pound;{price}
                </div>
                <div className="product-stock">
                    <label >stock level : {stock}</label>
                    <label >free delivery</label>
                </div>
                <div className="btn">
                    <button onClick={()=>navigate(`/products/${id}`)} >view product</button>
                    <button onClick={()=>addProduct({id,title,price})}>add to basket</button>
                </div>
                </div>
            </aside>

        </article>
    )
}

export default Products;