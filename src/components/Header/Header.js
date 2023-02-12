import './Header.css'
import logo from './logo.svg'
import basket_img from './basket_img.svg'
import { Link } from "react-router-dom";

function Header () {
    return (
        <div className = 'header'>
            <div className = 'header_left'>
            <Link to = {'/'}>
                    <img className='header_logo' src={logo} alt="logo_img"/>
            </Link>
                <div className = 'catalog_button'>Catalog</div>
            </div>
                <ul className = 'navigation'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/categories'>Categories</a></li>
                    <li><a href='/coupons'>Coupons</a></li>
                    <li><a href='/stocks'>Stocks</a></li>
                    <li><a href='/contacts'>Contacts</a></li>
                    <li><a href='/basket'><img className='basket_img' src = {basket_img} alt="basket_img"/></a></li>
                </ul>
        </div>
    )
}

export default Header