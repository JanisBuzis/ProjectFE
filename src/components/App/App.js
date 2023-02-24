import Header from '../Header/Header'
import Home from '../Home/Home'
import Coupon from '../Home/Coupon/Coupon'
import Categories from '../Home/Categories/Categories'
import SeasonSale from '../Home/SeasonSale/SeasonSale'
import Sale from '../Home/Sale/Sale'
import Footer from '../Footer/Footer'
import Basket from '../Basket/Basket'
import AllProducts from '../AllProducts/AllProducts'
import NotFound from '../NotFound/notFound'
import AllCategories from '../AllCategories/AllCategories'
import OneProduct from '../OneProduct/OneProduct'
import OneCategory from '../OneCategory/OneCategory'

import { Routes, Route } from "react-router-dom";

import './App.css'

function App() {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path="/" element = {<Home/>}/>
                    <Route path="/categories/all" element = {<AllCategories/>}/>
                    <Route path='/products/all' element = {<AllProducts/>}/>
                    <Route path='/basket' element = {<Basket/>}/>
                    <Route path='/coupon' element = {<Coupon/>}/>
                    <Route path='/Sale' element = {<Sale/>}/>
                    <Route path='/categories' element = {<Categories/>}/>
                    <Route path='/SeasonSale' element = {<SeasonSale/>}/>
                    <Route path='/home' element = {<Home/>}/>
                    <Route path='/categories/:id' element = {<OneCategory/>}/>
                    <Route path='/products/:id' element = {<OneProduct/>}/>
                    <Route path='*' element = {<NotFound/>}/>
                </Routes>
            <Footer/>
        </div>
    )
}

export default App