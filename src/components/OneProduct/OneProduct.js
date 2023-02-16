import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../..";
import { useParams } from "react-router-dom";
import { fetchOneProductList } from "../../asyncActions/oneProductFetch"

import './OneProduct.css'

function OneProduct () {

    let {id} = useParams()
        
    const OneProduct = useSelector(store => store.oneProduct.oneProduct)
    const dispatch = useDispatch()

    useEffect(()=> {
    dispatch(fetchOneProductList(id))
    }, []
    )

    return (
        <div className="one_product_home">    
            {OneProduct.map(elem => 
                <div className="one_product_link" key={elem.id} to={`/categories/${elem.id}`}>
                    <div className="one_product_types">
                        <div className="left_side_product" >
                        <p className="one_product_title">{elem.title}</p>
                            <img className="one_product_image" src={baseUrl + elem.image} alt='photo'/>
                        </div>
                        <div className="right_side_product">
                            <div className="prices">
                            <p className="price">{elem.discont_price} €</p>
                            <p className="price_disc">{elem.price} €</p>
                            <p className="percent">{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
                            </div>
                            <button className="addtoBasket">Add to Basket</button>
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OneProduct