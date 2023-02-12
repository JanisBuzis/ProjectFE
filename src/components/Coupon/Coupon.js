import './Coupon.css'
import gnom_img from './gnom.svg.svg'

function Coupon () {
    return (
        <div className='sales_input'>
            <div className='s_input_wrapper'>
                <div className='left_side_s_input'>
                    <img className='gnom_img' src = {gnom_img} alt = 'gnom_img'/>
                </div>
                <div className='right_side_s_input'>
                    <h3>Discount 5% <br/>for the first order</h3>
                        <input className='input_number' placeholder='+7'/>
                    <button className='get_discount'>Get Discount</button>
                </div>
            </div>

        </div>
        )    
}

export default Coupon