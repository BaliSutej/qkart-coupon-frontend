import react from 'react';
import './ApplyCoupon.css';


class ApplyCoupon extends react.Component {

    constructor(props){
        super(props);
        this.state = {
            called : true,
            amount : 0,
            couponCode : "",
            res :"",
            message:""
        }
    }


amountChangeHandler = (e) => {
    this.setState({
        "amount": e.target.value
    })
}

couponCodeChangeHandler = (e) => {
    this.setState({
        "couponCode": e.target.value
    })
}


getDiscount = async (amount,couponCode) => {
    let res = await fetch(`https://qkart-coupon-backend.herokuapp.com/get-discount?couponcode=${couponCode}&amount=${amount}`);
    res = await res.json();
    console.log(res);
    if(res.error){
        this.setState({
            "res":res.error
        })
    }else{
        this.setState({
            "res": `Discount of ${res.discount_amount} can be applied`,
            "message":res.message
        })
    }

}


btnClickHandler = (e) => {
    console.log(this.state.amount);
    console.log(this.state.couponCode);
    this.getDiscount(this.state.amount,this.state.couponCode);
}

    render() {
        return (
            <>
                <div id='applycoupon-cmpt'>
                    <div className="cartAmount">
                        <div>Enter cart amount </div>
                        <input onChange={this.amountChangeHandler} value={this.state.amount} type="text"></input>
                    </div>
                    <div className='cartCoupon' >
                        <input onChange={this.couponCodeChangeHandler} value={this.state.couponCode} placeholder='Enter Coupon Code' type="text"></input>
                        <button onClick={this.btnClickHandler} >Apply</button>
                        {(this.state.called ?<> <p>{this.state.res} </p> <p>{this.state.message}</p></>: null)}
                    </div>
                </div>
            </>
        )
    }

}

export default ApplyCoupon;