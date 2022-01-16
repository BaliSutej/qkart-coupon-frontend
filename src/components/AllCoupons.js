import react from 'react';
import './AllCouponsStyle.css';
import Coupon from './Coupon';

class AllCoupons extends react.Component {

    x = [{ code: "XYZ-Myntra-12" }, { code: "XYZ-Myntra-12" }, { code: "XYZ-Myntra-12" }, { code: "XYZ-Myntra-12" }, { code: "XYZ-Myntra-12" }, { code: "XYZ-Myntra-12" }, { code: "XYZ-Myntra-12" }]

    render() {
        return (
            <>
                <div id='allcoupon-cmpt'>
                    {
                        this.x.map((ele) => (
                            <Coupon code={ele.code}></Coupon>
                        ))
                    }
                </div>
            </>
        )
    }

}

export default AllCoupons;