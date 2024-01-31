import * as actions from './action'

const initialState={
    panier:[]
}

export const panierReducer=(state=initialState,action)=>{
    if(action.type===actions.ADD_PRODUCT){
        const itemExists=state.panier.find((item)=>item.id===action.payload.id)
        if(itemExists){
            return state
        }else{
            return{
                panier:[...state.panier,action.payload]
            }
        }
    }else if(action.type===actions.INCREMENT_QUANTITY){
        return {
            ...state.panier,
            panier: state.panier.map((item) => {
              if (item.id === action.payload) {
                return {
                  ...item,
                  quantity: item.quantity + 1
                };
              }
              return item;
            })
        };
    }else if(action.type===actions.DECREMENT_QUANTITY){
        return {
            ...state.panier,
            panier: state.panier.map((item) => {
              if (item.id === action.payload) {
                if(item.quantity>1){
                    return {
                        ...item,
                        quantity: item.quantity - 1
                      };
                }
              }
              return item;
            })
        };
    }else if(action.type===actions.REMOVE_PRODUCT){
        return{
            ...state.panier,
            panier:[...state.panier.filter((product)=>{
                return product.id!==action.payload
            })]
        }
    }else{
        return state
    }
}