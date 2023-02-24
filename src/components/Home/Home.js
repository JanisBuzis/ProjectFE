import SeasonSale from "./SeasonSale/SeasonSale";
import Categories from "./Categories/Categories";
import Coupon from "./Coupon/Coupon";
import Sale from "./Sale/Sale"

function Home () {
    return (
        <div>
            <SeasonSale/>
            <Categories/>
            <Coupon/>
            <Sale/>
        </div>
    )
}     

export default Home