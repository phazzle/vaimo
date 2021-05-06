import icon_expo from '../Icons/expo.png';
import icon_forward from '../Icons/icons8-forward.png';

function Expo(props) {
    return (
        <div className="col expo-container">
        <img src={icon_expo} alt="expo" className="expo-img" />
        <span>
            <ul className="expo-ul">
                <li className="expo-label"><span>Free shipping (up to $40)</span></li>
                <li className="expo-label"><span>On-time delivery guaranteed</span></li>
                <li><img src={icon_forward} alt="forward" className="expo-forward-icon"/></li>
              </ul> 
        </span>
    </div>
    );
  }
  export default Expo;