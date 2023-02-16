import { baseUrl } from ".."
import { getOneCategoryAction } from "../store/oneCategoryReducer"

export const fetchOneCategory = (id) =>{
    return function(dispatch){
        fetch (baseUrl + `/categories/${id}`)
           .then(res => res.json())
           .then(data => dispatch(getOneCategoryAction(data)))
    }
}