import * as actions from './action'

export const AddProduct=({id,quantity,designation,price,img})=>{
    return{
        type:actions.ADD_PRODUCT,
        payload:{
            id:id,
            quantity:quantity,
            designation:designation,
            price:price,
            img:img
        }
    }
}

export const RemoveProduct=(id)=>{
    return{
        type:actions.REMOVE_PRODUCT,
        payload:id
    }
}

export const IncrementQuantity=(id)=>{
    return{
        type:actions.INCREMENT_QUANTITY,
        payload:id
    }
}

export const DecrementQuantity=(id)=>{
    return{
        type:actions.DECREMENT_QUANTITY,
        payload:id
    }
}