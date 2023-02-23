import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { baseUrl } from "../..";
import { Link } from "react-router-dom";
import { addItemAction } from "../../store/basketReducer";
import { fetchProductsList } from "../../asyncActions/productsListFetch";
import Button from "../Function/Button/Button";

import './AllProducts.css'

function AllProducts () {

    const AllProducts = useSelector(store => store.productsList.productsList)
    const dispatch = useDispatch()

    const products = AllProducts

    useEffect(()=> {
        dispatch(fetchProductsList())
        }, [])

    return (
            <div className="all_products">
                <h6>Tools and inventory</h6>
                <div className="filters_and_prices">
                <p>Price</p>
                <input className="input_prices" placeholder='from'></input>
                <input className="input_prices" placeholder='to'></input>
                <p className="items_on_sale_p">Items on sale</p>
                <input className="check_box" type ="checkbox"></input>
                <p className="sort">Sort:</p>
                <input placeholder="Default" className="sort_input"></input>
                </div>
                <div className="all_products_main">
                    {products.map(elem => 
                        <Link className="products_link" key={elem.id} to={`/products/${elem.id}`}>
                        <img className="products_image" src={baseUrl + elem.image} alt='photo'/>
                        <div className="products_price">
                            <p className="price">{elem.discont_price} €</p>
                            <p className="price_disc">{elem.price != elem.discont_price ? '-' + elem.price + '€':''}</p>
                            <p className="percent">{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                        </div>
                            <p className="products_title">{elem.title}</p>
                            <div className="button_div">
                            <Button onClick={(elem2)=> 
                            {elem2.preventDefault()
                            dispatch(addItemAction(elem))
                            }} title='Add to cart'/>
                            </div>      
                        </Link>
                    )}
            </div>    
        </div>          
    )
}

export default AllProducts



/*<div className="button_div">
                        <Button onClick={(elem2)=> 
                        {elem2.preventDefault()
                        dispatch(addItemAction(elem))
                        }} title='Add to cart'/>
                        </div>*/      