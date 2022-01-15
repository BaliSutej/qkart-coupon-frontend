import react from 'react';
import './ApplyCoupon.css';


class ApplyCoupon extends react.Component {


    render() {
        return (
            <>
                <div id='applycoupon-cmpt'>
                    <div className="cartAmount">
                        <div>Enter cart amount </div>
                        <input type="text"></input>
                    </div>
                    <div className='cartCoupon' >
                        <input placeholder='Enter Coupon Code' type="text"></input>
                        <button>Apply</button>
                    </div>
                </div>
            </>
        )
    }

}

export default ApplyCoupon;