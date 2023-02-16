const defaultState = {
    productsList: []
}

const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const productsListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {...state, productsList: action.payload}
        default:
            return state    
    }
}

export const getProductsAction = (payload) => ({type: ADD_PRODUCTS, payload})

