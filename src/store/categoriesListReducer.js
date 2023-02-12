const defaultState = {
    categoriesList: []
}

const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const categoriesListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CATEGORIES:
            return {...state, categortiesList:[...action.payload]}
        default:
            return state    
    }
}

export const getCategoriesAction = (payload) => ({type: ADD_CATEGORIES, payload})