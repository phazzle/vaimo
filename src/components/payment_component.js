import icon_visa from '../Icons/icons8-visa.svg';
import icon_mastercard from '../Icons/icons8-mastercard.svg';
import icon_apple_pay from '../Icons/icons8-apple_pay.svg';
function Payment() {
    return (
        <div className="col">
        <span className="pad-by-12">
           <label className="payment-text">Payments:</label>
           <img src={icon_visa} alt="visa"/>
           <img src={icon_mastercard} alt="master-card"/>
           <img src={icon_apple_pay} alt="apple pay"/>
        </span>
    </div>
    );
  }
  export default Payment;