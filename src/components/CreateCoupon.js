import react from 'react';
import './CreateCouponStyle.css';

class CreateCoupon extends react.Component {

    constructor(props){
        super(props);
        this.state = {
            type:"percentage"
        }
    }


    render() {
        return (
            <>
                <div id="createcoupon-cmpt">
                    <form>
                        Coupon Code <input type="text"></input>
                        start date <input type="date"></input>
                        expire date <input type="text"></input>
                        coupon type <input type="text"></input>
                        minimum amount <input type="text"></input>
                        {(this.state.type === "flat"? "discount amount" : "maximum discount")}
                        <input type="text"></input>
                        {(this.state.type === "percentage"? <input placeholder='Discount percentage amount' type="text"></input>:null)}
                        
                    </form>
                </div>

            </>
        )
    }

}

export default CreateCoupon;