import react from 'react';
import './CreateCouponStyle.css';

class CreateCoupon extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "flat",
            couponCode: "",
            expireDate: "",
            startDate: "",
            minAmount: 0,
            discountAmount: 0,
            discountPercentage: 0,
            maxDiscountAmout: 0,
            res: "",
            message: ""
        }
    }


    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createCoupon = async (data) => {

        data = JSON.stringify(data);
        console.log(data);

        let res = await fetch('https://qkart-coupon-backend.herokuapp.com/create-coupon/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        res = await res.json();
        if (res.error) {
            this.setState({
                "res": res.error,
                "message": " "
            })
        } else {
            this.setState({
                "message": res.message,
                "res": " "
            })
        }
    }

    handleBtn = (e) => {
        e.preventDefault();
        let data;
        if (this.state.type === "flat") {
            data = {
                code: this.state.couponCode,
                startdate: this.state.startDate,
                enddate: this.state.expireDate,
                minimum_amount: this.state.minAmount,
                type: this.state.type,
                discount_price: this.state.discountAmount
            }
        } else {
            data = {
                code: this.state.couponCode,
                startdate: this.state.startDate,
                enddate: this.state.expireDate,
                minimum_amount: this.state.minAmount,
                type: this.state.type,
                discount_percentage: this.state.discountPercentage,
                max_discount_price: this.state.maxDiscountAmout
            }
        }

        this.createCoupon(data);

    }

    render() {
        return (
            <>
                <div id="createcoupon-cmpt">
                    <form>
                        Coupon Code <input onChange={this.inputChangeHandler} name='couponCode' value={this.state.couponCode} type="text"></input>
                        start date <input onChange={this.inputChangeHandler} name='startDate' placeholder='yyyy-mm-dd' value={this.state.startDate} type="text"></input>
                        end date <input name='expireDate' onChange={this.inputChangeHandler} placeholder='yyyy-mm-dd' value={this.state.expireDate} type="text"></input>
                        coupon type <input onChange={this.inputChangeHandler} name='type' value={this.state.type} type="text"></input>
                        minimum amount <input onChange={this.inputChangeHandler} name='minAmount' value={this.state.minAmount} type="text"></input>
                        {(this.state.type === "flat" ? <>Maximum Discount <input onChange={this.inputChangeHandler} name='discountAmount' value={this.state.discountAmount} type="text"></input></> : null)}
                        {(this.state.type === "percentage" ? <>Discount percentage <input name='discountPercentage' onChange={this.inputChangeHandler} value={this.state.discountPercentage} type="text"></input></> : null)}
                        {(this.state.type === "percentage" ? <>Max Discount Amount <input name='maxDiscountAmout' onChange={this.inputChangeHandler} value={this.state.maxDiscountAmout} type="text"></input></> : null)}
                        <button onClick={this.handleBtn}>Add Coupon</button>
                    </form>
                    <div>
                        <p>{this.state.res}</p>
                        <p>{this.state.message}</p>
                    </div>
                </div>

            </>
        )
    }

}

export default CreateCoupon;