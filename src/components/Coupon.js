import './AllCouponsStyle.css';

function Coupon(props) {
    return (
        <>
            <div className='coupons'>
                <h5>Coupon Code </h5>
                <p>{props.code}</p>
            </div>
        </>
    )
}

export default Coupon;