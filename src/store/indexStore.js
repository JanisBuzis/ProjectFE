import {applyMiddleware, combineReducers, createStore} from 'redux'
import { categoriesListReducer } from './categoriesListReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers ({
    CategoriesList: categoriesListReducer
})

export const store = createStore (rootReducer, applyMiddleware(thunk))
