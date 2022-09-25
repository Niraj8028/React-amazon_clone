

export const initialState={
    cart:['niraj','suraj'],
}


export const reducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart,action.item],
            }
            
            
        case 'REMOVE_FROM_CART':
            //
            break;
    
        default:
            return state
           
    }
}

