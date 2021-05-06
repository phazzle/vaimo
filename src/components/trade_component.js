import icon_lock from '../Icons/icons8-security_lock.png';
function Trade(props) {
    return (
        <div className="col">
        <span>
            <img src={icon_lock} alt="lock"/>
            <label className="trade-text">Trade Assurance</label>
            <label className="protects-text">protects your Alibaba.com orders</label>
        </span>
     </div>
        );
  }
  export default Trade;