import React, {useContext, useState ,useEffect} from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaRegTrashAlt, FaPlusCircle, FaMinusCircle  } from 'react-icons/fa';



const Basket = ()=>{
    const navigate= useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const {getItems , increaseProduct, decreaseProduct , removeProduct , clearBasket} = useContext(CartContext);
    console.log("cart items in basket : ",cartItems);
   

    useEffect(()=>{
        const data = async () => {
            const item = await getItems();
            const _state = [...item]
            setCartItems(_state);
        }
        data();
        
    },[getItems]);


    const renderCart = () => {


        if (cartItems.length > 0) {   

        return cartItems.map((p)=>(
            <React.Fragment key={p.id}>
            <div className="cart-item-title mgt">
               <Link to={`/products/${p.id}`}> {p.title}</Link>
            </div>
            <div className="cart-item-quantity mgt">
                {p.quantity}
                <FaPlusCircle className="cart-plus" onClick={()=>setCartItems(increaseProduct({id:p.id}))}/>
                <FaMinusCircle className="cart-minus" onClick={()=>setCartItems(decreaseProduct({id:p.id}))}/>
                <FaRegTrashAlt className="cart-trash" onClick={()=>setCartItems(removeProduct({id:p.id}))}/>
            </div>
            <div className="cart-item-price mgt">
                &pound;{p.price}
            </div>
            </React.Fragment>
        ));
    }
    else{
       return <div className="no-cart-item">
        NO ITEM IN CART
       </div>

    }
    }

    const renderTotal = () => {

        const total = cartItems.reduce((total,item)=>{
            return (total + item.price)*item.quantity
        },0)
        return total;
    }
    return ( <div className="basket">
        <div className="basket-header">
        <h2 className="basket-title">Shoping basket</h2>
        <button className="checkouts-btn" onClick={()=>navigate("/checkouts")}>Checkout</button>
        </div>
        <div className="basket-detail">
            <div className="basket-detail-header">
            <h5 className="key-items">Item</h5>
            <h5 className="key-items2" >Quantity </h5>
            <h5 className="key-items3" >Price</h5>
            </div>
            <hr />
            <div className="cart-items-in-basket">
                    {renderCart()}
            </div>
            <hr />
        </div>
        <div className="basket-total-detail">
        <button className="clear-basket" onClick={ ()=>setCartItems(clearBasket())}> Clear </button>
            <div className="basket-total">Total : &pound;{renderTotal()}</div>
        </div>
    </div> )
}

export default Basket;