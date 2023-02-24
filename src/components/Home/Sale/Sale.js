import { fetchProductsList } from "../../../asyncActions/productsListFetch";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { baseUrl } from "../../..";
import { addItemAction } from "../../../store/basketReducer";
import Button from "../../Function/Button/Button";

import './Sale.css'

function Sale () {

    const Products = useSelector(store => store.productsList.productsList)
    const products = Products.slice (0, 3)

    const dispatch = useDispatch()

    useEffect(()=> {
    dispatch(fetchProductsList())    
    }, []
    )

    return (
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
                        <div className="button_div_sale">
                            <Button onClick={(elem2)=> 
                            {elem2.preventDefault()
                            dispatch(addItemAction(elem))
                            }} title='Add to basket'/>
                            </div>      
                    </div>
                </Link>
            )}
        </div>
    </div>
    )
}

export default Sale