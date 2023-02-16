import { baseUrl } from ".."
import { getOneProductAction } from '../store/oneProductReducer'

export const fetchOneProductList = (id) => {
    return function (dispatch) {
        fetch (baseUrl + `/products/${id}`)
            .then (res => res.json())
            .then (data => dispatch(getOneProductAction(data)))
    }
}