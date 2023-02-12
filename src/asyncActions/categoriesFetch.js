import { baseUrl } from ".."
import { getCategoriesAction } from '../store/categoriesListReducer'

export const fetchCategoriesList = () => {
    return function (dispatch) {
        fetch (baseUrl + '/categories/all')
            .then (res => res.json())
            .then (data => dispatch(getCategoriesAction(data)))
    }
}