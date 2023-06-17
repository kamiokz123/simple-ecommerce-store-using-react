import React , {createContext,useReducer} from "react";
import { CartReducer } from "./CartReducer";


export const CartContext = createContext();

const Storage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const initialState = {
    cartItems : Storage
}



const CartContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(CartReducer,initialState);
    
    const addProduct = (payload) => {
       dispatch({type:"ADD",payload});
       return state.cartItems;
    }
    const removeProduct = (payload) => {
        dispatch({type:"REMOVE",payload});
        return state.cartItems;
     }

    const increaseProduct = (payload) => {
        dispatch({type:"INCQTY",payload});
        return state.cartItems;
     }
    const decreaseProduct = (payload) => {
        dispatch({type:"DECQTY",payload});
        return state.cartItems;
     }
    const clearBasket = (payload) => {
        // debugger;
        dispatch({type:"CLEAR",payload:undefined});
        return state.cartItems;
     }
    const getItems = () => { 
        return state.cartItems;
    }
    console.log("in cartcontext:",state.cartItems);

    const contextValue = {
        addProduct,
        removeProduct,
        increaseProduct,
        decreaseProduct,
        clearBasket,
        getItems,
        ...state
    }
    return(
        <CartContext.Provider value={contextValue} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider; 