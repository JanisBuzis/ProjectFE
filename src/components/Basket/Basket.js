import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseUrl } from "../..";
import { addCountAction, deletCountAction, remCountAction } from "../../store/basketReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './Basket.css'

function Basket () {
    const basket = useSelector(store => store.basket.basket)
    let dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    },[basket])

    return (
        <div className="main margin_width">
        <div className='basket_main'>
            <p className='basket_title'>Basket</p>
            <div className='basket_header'>
                <p>Home/Basket </p>
                <Link to={'/products/all'}>
                    <button>Back</button>
                </Link>
            </div>            
            <hr/>
                {basket.map(elem => 
                <div className='basket'>
                    <div className='cart_cart'>
                        <div className='basket_photo_block'>
                            <div className='basket_images' style={{backgroundImage: `url(${baseUrl + elem.image})`}}></div>
                        </div>
                        <div className='basket_text_block'>
                            <p className='basket_titel'>{elem.title}</p>
                            <div className='basket_counter'>
                                <button onClick={() => dispatch(remCountAction(elem.id))}>-</button>
                                <p>{elem.count}</p>
                                <button onClick={() => dispatch(addCountAction(elem.id))} >+</button>
                            </div>
                        </div>
                        <div className='basket_price_block'>
                            <p className='basket_price'>{Math.round(elem.price * elem.count)}€</p>
                            <p className='basket_discont_price'>
                                {elem.discont_price !== elem.price ? 
                                Math.round(elem.discont_price * elem.count) + '€': ''}
                            </p>
                        </div> 
                        <div className='cross_delete'>                            
                            <FontAwesomeIcon onClick={() => dispatch(deletCountAction(elem.id))} 
                            title={'close'} 
                            icon={ faXmark } 
                            className='delete_block_icon'/>
                        </div>                
                    </div>        
                    <hr/>
                </div>
                )}                
        </div>
        <div className="order_right_side">
            <div className="order_right_top">
            <p className='order_details_text'>Order Details</p>
                <div className='order_details'>
                    <div className='sum'>
                        <p className='order_details_sum'>Sum</p>
                        <p className='order_details_sum_number'>
                            {basket.reduce((sum, elem) => Math.round(sum + (elem.price * elem.count)), 0) != 0 ? 
                            (basket.reduce((sum, elem) => Math.round(sum + (elem.price * elem.count)), 0)) + '€' : ''}
                        </p>
            </div>
            </div>                     
        </div>
        <div className="order_button_input">
            <input placeholder="Your number" className="basket_input_number"></input>
            <button className="make_order">Order</button>                 
        </div>    
        </div>
    </div>    
    )
}

export default Basket