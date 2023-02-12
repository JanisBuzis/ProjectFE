import Header from '../Header/Header'
import SeasonSales from '../SeasonSales/SeasonSales'
import Coupon from '../Coupon/Coupon'
import Discounts from '../Discounts/Discounts'
import Footer from '../Footer/Footer'
import Basket from '../Basket/Basket'
import Catalog from '../Catalog/Catalog'
import CategoriesList from '../Categories/CategoriesList'

import { Routes, Route } from "react-router-dom";

import './App.css'


function App() {
    return (
        <div>
            <Header/>
                <Routes>
                <Route path="/" element = {
                        <div>
                           <SeasonSales/>
                           <CategoriesList/>
                           <Coupon/>
                           <Discounts/>
                        </div>
                        }/>
                    <Route path='/catalog' element = {<Catalog/>}/>
                    <Route path='/basket' element = {<Basket/>}/>
                </Routes>
            <Footer/>
        </div>
    );
}

export default App