function ImageHolder(props) {
    return (<div>
        <img className="image"  src={props.url} alt="product"/>
        </div>);
  }
  export default ImageHolder;