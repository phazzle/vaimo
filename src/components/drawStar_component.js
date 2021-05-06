import icon_star from '../Icons/icons8-star_filled.png';

function DrawStar(props) {
  var elements =[];
  for (let i = 0; i< props.count;i++){
    elements.push(<img src={icon_star} key={i} alt="star"/>);
  }
  return elements;
  }
  export default DrawStar;


