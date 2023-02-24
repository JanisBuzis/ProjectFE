import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from '../../..';
import { fetchCategoriesList } from "../../../asyncActions/categoriesListFetch"

import './Categories.css'


function Categories () {

    const dispatch = useDispatch()

    const Categories = useSelector(store => store.categoriesList.categoriesList)
    const categories = Categories.slice (0, 4)
  
    useEffect(()=> {
    dispatch(fetchCategoriesList())
    }, []
    )

    return (
        <div className="categories_main" id="categories">
                <div className="categories_h">
                    <h6>Categories</h6>
                    <Link to = {'/categories/all'}>
                        <button type="submit">All Categories</button>
                    </Link>
            </div>
        <div className="categories_home">    
            {categories.map(elem => 
                <Link className="categories_link" key={elem.id} to={`/categories/${elem.id}`}>
                    <div className="categories_wrapper">
                    <div className='categories_image' style={{backgroundImage: `url(${baseUrl + elem.image})`}}></div>
                    <p>{elem.title}</p>
                    </div>
                </Link>
            )}
                </div>
        </div>
    )
}

export default Categories            