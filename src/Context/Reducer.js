
export const initialState={
    cart:[],
    user:null,
}

export const getCartTotal=(cart)=>{
    cart?.reduce((amount,item)=>item.price+amount,0)
}

export const reducer=(state,action)=>{
    console.log(action.type);
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }


        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart,action.item],
            }
            
            
        case 'REMOVE_FROM_CART':
            const temp=[...state.cart];

            const index=state.cart.findIndex(
                (item)=>item.id===action.id
            )
            if(index>=0){
                temp.splice(index,1);
            }
            else{
                console.warn("Already Removed From Cart")
            }
            return{
                ...state,
                cart:temp
            }

           
           
    
        default:
            return state
           
    }
}

