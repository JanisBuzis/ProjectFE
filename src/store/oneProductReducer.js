const defaultState = {
    oneProduct: []
}

const GET_PRODUCT = 'GET_PRODUCT'
export const oneProductReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {...state, oneProduct: action.payload}
        default:
            return state    
    }
}

export const getOneProductAction = (payload) => ({type: GET_PRODUCT, payload})
