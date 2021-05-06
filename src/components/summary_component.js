import icon_info from '../Icons/icons8-info.png';
import icon_envelope from '../Icons/icons8-envelope.png';
function Summary(props) {
    return (
        <div className="card">
        <div className="row flex">
            <div className="col-8">
                <div className="col">
                    <label className="ship-to-text">Ship to 
                        <a href = "https://www.google.com" className="ship-to-text"> {props.shipCountry}</a></label>
                </div>
                <div className="col">
                <span>
                    <label className="ship-to-text">Lead Time {props.leadTime}</label>
                    <img src={icon_info} className="icons" alt="info" />
                </span>
                </div>
                <div className="col">
                    <span>
                        <label className="ship-to-text">Shipping time {props.shipTime}</label>
                        <img src={icon_info} className="icons" alt="info" />
                    </span>

                </div>
            </div>
            <div className="col-4">
                <label className="amount-text"><span>{props.symbol}</span> {props.total}</label>
            </div>

        </div>

        <div className="row">
            <div>
                <button className="button-login">Login to Purchase</button>
            </div>
            <div >
                <button className="button-contact">
                    <img src={icon_envelope} alt="envelope"/>   Contact the Supplier</button>
            </div>

        </div>
    </div>
    );
  }
  export default Summary;