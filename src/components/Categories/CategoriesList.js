import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../..";
import { Link } from "react-router-dom";
import { fetchCategoriesList } from "../../asyncActions/categoriesFetch"

import "./CategoriesList.css"


function CategoriesList(){
    const categories = useSelector(store => store.categoriesList.categoriesList)
    const dispatch = useDispatch()
  
    useEffect(()=> {
      dispatch(fetchCategoriesList())
    }, []
    )

    return(
        <div>
            <div className="categories_title">
                <h7>Categories</h7>
                <button>All Categories</button>
            </div>        
            {categories.map(elem => 
                <Link key={elem.id} to={'/categories/${elem.id}'}>
                    <div className="categories_types">
                        <div className="categories_wrapper">
                            <img src={baseUrl + elem.image} alt='photo'/>
                            <p>{elem.title}</p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default CategoriesList