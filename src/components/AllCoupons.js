import react from 'react';
import './AllCouponsStyle.css';
import Coupon from './Coupon';

class AllCoupons extends react.Component {

    constructor(props){
        super(props);
        this.state = {
            couponsList : []
        };
    }


    getLatestCoupons = async () => {
        let res = await fetch('https://qkart-coupon-backend.herokuapp.com/all-coupons');
        res = await res.json();
        this.setState({
            couponsList : res
        })
    }


    onClickHandler = (e) =>{
        console.log("Button clicked");
            this.getLatestCoupons();
    }


    render() {
        return (
            <>
                <div>
                    <button onClick={this.onClickHandler}>Get Coupons</button>
                </div>
                <div id='allcoupon-cmpt'>
                    {
                        this.state.couponsList.map((ele) => (
                            <Coupon code={ele.code}></Coupon>
                        ))
                    }
                </div>
            </>
        )
    }

}

export default AllCoupons;