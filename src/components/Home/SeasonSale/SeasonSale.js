
import { Link } from "react-router-dom";
import trava from './trava.svg'

import './SeasonSale.css'

function SeasonSale () {
    return (
        <div className="sales">
            <div className='sales_wrapper'>
                <div className='left_side'>
                    <h1 className='h1'>Sales</h1>
                        <h2 className='h2'>for the new season</h2>
                    <div className='buttons_bottom'>
                    <Link className="all_salesLink" to = {'/products/all'}>
                        <div className='all_sales'>All sales</div>
                    </Link>
                    <Link to={'/products/all'}>
                        <div className='details'>Details</div>
                    </Link>
                </div>
            </div>
                <div className='right_side'>
                    <img className='garden_img' src = {trava} alt='trava_img'/>
                </div>
            </div>
        </div>
    )
}

export default SeasonSale 