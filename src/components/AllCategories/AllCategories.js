import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../..";
import { Link } from "react-router-dom";
import { fetchCategoriesList } from "../../asyncActions/categoriesListFetch"

import './AllCategories.css'

function AllCategories () {

    const AllCategories = useSelector(store => store.categoriesList.categoriesList)
    const dispatch = useDispatch()

    useEffect(()=> {
    dispatch(fetchCategoriesList())
    }, []
    )

    return(
        <div className="all_categories_main">
            <h6>All categories</h6>
            <div className="all_categories_home">    
            {AllCategories.map(elem => 
                <Link className="categories_link" key={elem.id} to={`/categories/${elem.id}`}>
                    <div className="categories_types">
                        <div className="categories_wrapper">
                            <img className="categories_image" src={baseUrl + elem.image} alt='photo'/>
                            <p>{elem.title}</p>
                        </div>
                    </div>
                </Link>
            )}
            </div>
        </div>
    )    
}

export default AllCategories