import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../..";
import { Link } from "react-router-dom";
import { fetchCategoriesList } from "../../asyncActions/categoriesListFetch"
import { fetchProductsList } from "../../asyncActions/productsListFetch";

import trava from './trava.svg'
import gnom_img from './gnom.svg'

import './Home.css'

function Home () {

    const dispatch = useDispatch()

    const Categories = useSelector(store => store.categoriesList.categoriesList)
    const categories = Categories.slice (0, 4)
  
    useEffect(()=> {
    dispatch(fetchCategoriesList())
    }, []
    )

    const Products = useSelector(store => store.productsList.productsList)
    const products = Products.slice (0, 3)

    useEffect(()=> {
    dispatch(fetchProductsList())    
    }, []
    )


    return (
        <div className='home_main'>
            <div className="sales">
                <div className='sales_wrapper'>
                    <div className='left_side'>
                        <h1 className='h1'>Sales</h1>
                            <h2 className='h2'>for the new season</h2>
                        <div className='buttons_bottom'>
                        <Link className="all_salesLink" to = {'/products/all'}>
                            <div className='all_sales'>All sales</div>
                        </Link>
                        <div className='details'>Details</div>
                    </div>
                </div>
                <div className='right_side'>
                    <img className='garden_img' src = {trava} alt='trava_img'/>
                    </div>
                </div>
            </div>
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
            <div className='sales_input' id="sales_input">
                <div className='s_input_wrapper'>
                    <div className='left_side_s_input'>
                        <img className='gnom_img' src = {gnom_img} alt = 'gnom_img'/>
                </div>
                <div className='right_side_s_input'>
                    <h3>Discount 5% <br/>for the first order</h3>
                        <input className='input_number' placeholder='+49'/>
                    <button className='get_discount'>Get Discount</button>
                    </div>
                </div>
            </div>
            <div className="discounts_main" id="discounts">
                <h6>Discounts</h6>
                <div className="discounts_wrapper">
                    {products.map(elem => 
                        <Link className="discounts_link" key={elem.id} to={`/products/${elem.id}`}>
                                <div className="discounts_img_wrapper">
                                    <img width={300} height={300} className="discounts_image" src={baseUrl + elem.image} alt='photo'/>
                                        <div className="discounts_price">
                                            <p className="price">{elem.discont_price} €</p>
                                            <p className="price_disc">{elem.price} €</p>
                                            <p className="percent">{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                                        </div>
                                    <p className="discounts_title">{elem.title}</p>
                                </div>
                        </Link>
                    )}
                </div>
            </div>
        </div> 
    )
}

export default Home