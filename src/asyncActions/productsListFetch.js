import { baseUrl } from ".."
import { getProductsAction } from '../store/productsListReducer'

export const fetchProductsList = () => {
    return function (dispatch) {
        fetch (baseUrl + '/products/all')
            .then (res => res.json())
            .then (data => dispatch(getProductsAction(data)))
    }
}