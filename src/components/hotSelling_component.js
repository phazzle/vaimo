function HotSelling(props) {
    return (
        <div className="col-hotselling">
        <p className="product-name">
            {props.name}
            <span className="tag-container">
            {props.tags.map((t)=>
            <label className="tag" key={t}>{t}</label>
            )}
            </span>
        </p>
        </div>
    );
  }
  export default HotSelling;