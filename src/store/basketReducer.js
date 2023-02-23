const defaultState = {
    basket: JSON.parse(localStorage.getItem('basket')) ?? []
}

const ADD_ITEM = 'ADD_ITEM'
const ADD_COUNT = 'ADD_COUNT'
const DEL_COUNT = 'DEL_COUNT'
const REM_COUNT = 'REM_COUNT'


export const basketReducer = (state = defaultState, action) =>{
    switch(action.type){
        case ADD_ITEM:
        let basket_add = state.basket.find(elem => elem.id == action.payload.id)
        if (basket_add) {             
            return {...state, basket: state.basket.map(elem => {
                if (elem.id == basket_add.id){
                    elem.count = elem.count + 1
                }
                return elem
                })}
            } else {
                return {...state, basket: [...state.basket, {...action.payload, count: 1}]}}            
        case ADD_COUNT:
            return {...state, basket: state.basket.map(elem => {
                if (elem.id == action.payload){
                    elem.count = elem.count + 1
                    }
                return elem
            })}
        case REM_COUNT:
            let rem = state.basket.find(elem => elem.id == action.payload)
            if (rem.count == 1){
                return {...state, basket: state.basket.filter(elem => elem.id != action.payload)}
            } else {
                return {...state, basket: state.basket.map(elem => {
                    if (elem.id == action.payload){
                        elem.count = elem.count - 1
                    }
                    return elem
                    })}
                }
        case DEL_COUNT:
            return {...state, basket: state.basket.filter(elem => elem.id != action.payload)}
        default:
            return state
    }   
}

export const addItemAction = (payload) => ({type: ADD_ITEM, payload})
export const addCountAction = (payload) => ({type: ADD_COUNT, payload}) 
export const remCountAction = (payload) => ({type: REM_COUNT, payload})
export const deletCountAction = (payload) => ({type: DEL_COUNT, payload})