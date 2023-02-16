import Header from '../Header/Header'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Basket from '../Basket/Basket'
import Catalog from '../AllProducts/AllProducts'
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
                    <Route path='/products/all' element = {<Catalog/>}/>
                    <Route path='/basket' element = {<Basket/>}/>
                    <Route path='/categories/:id' element = {<OneCategory/>}/>
                    <Route path='/products/:id' element = {<OneProduct/>}/>
                    <Route path='*' element = {<NotFound/>}/>
                </Routes>
            <Footer/>
        </div>
    );
}

export default App