import Countdown from 'react-countdown';
import icon_time from '../Icons/icons8-time.png';

function Discount(props) {
    return (
    <div className="col space-discount">
        <p>
            <label className="percentage">{props.amount} OFF</label>
            <label className="discount-ends">Discount ends in</label>
            <img src={icon_time} className="time-icon" alt="clock" />
            <label className="timer"> 
            <Countdown classNameName="countDown" date={props.date} intervalDelay={100} precision={4}/>
            </label>
        </p>
     </div>
    );
  }
  export default Discount;
