import { applyMiddleware, combineReducers, createStore } from 'redux'
import { categoriesListReducer } from './categoriesListReducer'
import { productsListReducer } from './productsListReducer'
import { oneProductReducer } from './oneProductReducer'
import { OneCategoryReducer } from './oneCategoryReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers ({
    categoriesList: categoriesListReducer,
    productsList: productsListReducer,
    oneProduct: oneProductReducer,
    oneCategory: OneCategoryReducer

})

export const store = createStore (rootReducer, applyMiddleware(thunk))
