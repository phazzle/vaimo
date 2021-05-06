import DrawStar from './drawStar_component'
function Rate(props) {
    return (
        <div className="col">
        <span>
          <DrawStar count={props.stars} />
        </span>
        <label className="rate">{props.rate}</label>
        <label className="reviews">{props.reviews} Reviews</label>
        <label className="buyers">{props.buyers} buyers</label>
        </div>
    );
  }
  export default Rate;