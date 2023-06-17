import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";


const Checkouts = ()=>{

    const navigate = useNavigate();
    const [form , setForm] = useState({
        name:"",
        email:"",
        shippingAddress:""
    });

    const errors =  {
        name : form.name.length===0,
        email : form.email.length===0,
        shippingAddress : form.shippingAddress.length===0
    }
    const disabled = Object.keys(errors).some((x)=>errors[x]);

    const handleChange = (ev) => {
        const {name , value} = ev.target;

        setForm((prevState)=>{
            return {
                ...prevState,
                [name] : value
            }
        })
    }

    const handleSubmit = (ev)=>{
        if (disabled) {
            ev.preventDefault();
            return;
        }
        else{
        navigate("/confirmorders")
    }
    }

   


    return ( 
    <div className="checkout">
        <form onSubmit={handleSubmit} >
        <div className="checkout-title">
            <h1>Shopping Checkout</h1>
        </div>
        <h5 className="personal-detail-title">Your Detail</h5>
        <hr />
        <div className="personal-detail">
            <label htmlFor="name">  Name  </label>
            <input type="text" id="name" name="name" onChange={handleChange} placeholder="Enter name" />
            <label htmlFor="email">Email </label>
            <input type="text" id="email" name="email" onChange={handleChange} placeholder="Enter email" />
        </div>
        <h5 className="address-detail-title personal-detail-title">Address detail</h5>
        <hr />
        <div className="address-detail">
            <label htmlFor="check" className="check">Copy to shiping  </label>
            <input type="checkbox" name="check" id="check" />
            <div className="address-inputs">
            <label htmlFor="bill-addr">Billing Address</label>
            <textarea name="bill-addr" id="bill-addr" cols="20" rows="2"></textarea>
            <label htmlFor="shipping-addr">Shipping Address </label>
            <textarea name="shippingAddress" id="s" cols="20" rows="2" onChange={handleChange} placeholder="enter shipping address" ></textarea>
            </div>
            <div className="checkouts-btns">
            <button  className="cancel-order-btn clear-basket" onClick={()=>navigate("/basket")}>CANCEL</button>
            <button type="submit" className="confirm-order-btn clear-basket basket-total" disabled={disabled} >Confirm Order</button>
            </div>
        </div>
    </form>
    </div>
     )
}

export default Checkouts;