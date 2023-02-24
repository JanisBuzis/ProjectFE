import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Button from "../Function/Button/Button"
import { addItemAction } from "../../store/basketReducer"
import { baseUrl } from "../.."

import { fetchOneCategory } from "../../asyncActions/oneCategoryFetch"

import './OneCategory.css'

function OneCategory () {

  const {id} = useParams()
  const oneCategory = useSelector( store => store.oneCategory.oneCategory)
  const AllCategories = useSelector(store => store.categoriesList.categoriesList).find(elem => elem.id == id)
  const dispatch = useDispatch()

  useEffect(() =>{
      dispatch (fetchOneCategory(id))     
    },[])

  return (
      <div className="oneCategory_wrapper">
          <p className="oneCategory_title">{AllCategories?.title}</p>
              <div className="oneCategory_content">
                {oneCategory.map( elem =>
                  <div key={elem.id} className='oneCategory_product'>
            <Link to = {`/products/${elem.id}`}>
              <img className='oneProductImage' src={baseUrl + elem.image} alt='image'/>
            </Link>
            <div className='category_price' >
              <p className='price'>{elem.discont_price} €</p>
              <p className='price_disc'>{elem.price} €</p>
              <p className='percent'>{Math.round(((elem.price-elem.discont_price)/(elem.price))*100)} %</p>
            </div>
            <p className='product_title'>{elem.title}</p>
            <div className="button_div">
                        <Button onClick={(elem2)=> 
                        {elem2.preventDefault()
                        dispatch(addItemAction(elem))
                        }} title='Add to basket'/>
                        </div>   
            </div>
            )}
            </div>
      </div>
  )
}

export default OneCategory