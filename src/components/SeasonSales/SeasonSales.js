import './SeasonSales.css'
import trava from './trava.svg'

function SeasonSales () {
    return (
        <div className="sales">
            <div className='sales_wrapper'>
                <div className='left_side'>
                    <h1 className='h1'>Sales</h1>
                    <h2 className='h2'>for the new season</h2>
                    <div className='buttons_bottom'>
                    <div className='all_sales'>
                        All sales
                    </div>
                    <div className='details'>
                        Details
                    </div>
                    </div>
                </div>
                <div className='right_side'>
                        <img className='garden_img' src = {trava} alt='trava_img'/>
                </div>
            </div>
        </div>
    )
}

export default SeasonSales