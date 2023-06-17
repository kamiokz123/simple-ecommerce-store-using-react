export const CartReducer = (state,action) => {  
    const Storage = (cartitems) => {
        localStorage.setItem("cart", JSON.stringify(cartitems.length > 0 ? cartitems : []))
    }
    // debugger;

    let index = -1;

    if (action.payload) 
            index = state.cartItems.findIndex((x)=>{
            return x.id===action.payload.id});

        let newItems = [...state.cartItems];
    switch (action.type) {
        case "ADD":
        case "INCQTY":
            
            if (index === -1) {
                //  state.cartItems.push({...action.payload,quantity:1});
                 newItems.push({...action.payload,quantity:1});
            }
            else{
            //   state.cartItems[index].quantity++;
            newItems[index].quantity++;
            }
            break;

        case "REMOVE":
            if (index>-1) {
            // state.cartItems.splice(index,1)
            newItems = state.cartItems.filter(x=>x.id!==action.payload.id);
            }
            break;
        case "DECQTY":
            if (index>-1) {
                if(newItems[index].quantity>1){
                newItems[index].quantity--;
            }
            }
            break;
        case "CLEAR":
            newItems=[];
            break;
        default:
            // return state;
    }
    
    state.cartItems = newItems;
    Storage(newItems)
    return state;
}