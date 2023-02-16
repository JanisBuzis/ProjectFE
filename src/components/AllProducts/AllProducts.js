import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../..";
import { Link } from "react-router-dom";
import { fetchProductsList } from "../../asyncActions/productsListFetch"

import './AllProducts.css'

function AllProducts () {

    const AllProducts = useSelector(store => store.productsList.productsList)
    const dispatch = useDispatch()

    const products = AllProducts.slice (0, 8)
  

    useEffect(()=> {
    dispatch(fetchProductsList())
    }, []
    )

    return (
        <div className="products_main">
            <h6>Tools and inventory</h6>
            <div className="filters_and_prices">
                <p>Price</p>
                <input className="input_prices" placeholder='from'></input>
                <input className="input_prices" placeholder='till'></input>
                <p className="items_on_sale_p">Items on sale</p>
                <input className="check_box" type ="checkbox"></input>
                <p className="sort">Sort:</p>
                <input placeholder="Default" className="sort_input"></input>
            </div>
            <div className="all_products_main">    
            {products.map(elem => 
                <Link className="products_link" key={elem.id} to={`/products/${elem.id}`}>
                    <div className="products_types">
                        <div className="products_wrapper">
                            <img className="products_image" src={baseUrl + elem.image} alt='photo'/>
                                <div className="products_price">
                                <p className="price">{elem.discont_price} €</p>
                                <p className="price_disc">{elem.price} €</p>
                                <p className="percent">{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                                </div>
                                <p className="products_title">{elem.title}</p>
                        </div>
                    </div>
                </Link>
            )}
            </div>
        </div>
        
    )
}

export default AllProducts