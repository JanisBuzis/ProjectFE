import { Link } from "react-router-dom";
import { useSelector  } from "react-redux";

import logo from './logo.svg'
import basket_img from './basket_img.svg'

import './Header.css'

function Header () {
    
    const basket = useSelector(store => store.basket.basket)

    return (
        <div className = 'header'>
            <div className = 'header_left'>
            <Link to = {'/'}>
                <img className='header_logo' src={logo} alt="logo_img"/>
            </Link>
            <Link className='catalog_button_link' to = {'/products/all'}>
                <div className = 'catalog_button'><a className='a_catalog'>Catalog</a></div>
            </Link>
            </div>
            <ul className = 'navigation'>
                <li><a href='/#categories'>Categories</a></li>
                <li><a href='/#sales_input'>Coupons</a></li>
                <li><a href='/#discounts'>Discounts</a></li>
                <li><a href='/#contacts'>Contacts</a></li>
                <div className="basket_block">
                    <Link to={'/basket'}>
                        <img src = {basket_img} alt="basket_img"/>
                        <p className="basket_count">{`${basket.reduce((sum, value) => sum + value.count, 0)}`}</p>
                    </Link>
                </div>
            </ul>
        </div>
    )
}

export default Header