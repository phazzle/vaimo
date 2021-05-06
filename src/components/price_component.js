function Price(props) {
    var el_keys=[];//store keys
    var elements=[];//store new prices
    var oldPrice=[];//store old prices
    Object.keys(props.price).map(i=>el_keys.push(i));
    var num_of_options = Object.values(props.price).length;//length of number of options
    for(let i =0 ; i< Object.keys(props.price).length;i++)
    {
      //store new prices and old prices in array
      elements.push(props.price[el_keys[i]].price.value);
      oldPrice.push(props.price[el_keys[i]].old_price.value)
    }
    var currency = props.price[el_keys[0]].price.currency.symbol;
    var max = Math.max.apply(null, elements); // returns max number of price
    var min = Math.min.apply(null, elements); // returns min number of price
    var maxOldPrice = Math.max.apply(null, oldPrice); // return max number of old price
    var minOldPrice = Math.min.apply(null,oldPrice); // return min number of old price 
    return (
        <div className="row line-border">
        <div className="col">
            <span>
                <label className="price-label">{currency} {min} - {max}</label>
                <label className="option-label-1">/ Option |</label>
                <label className="option-label-2">{num_of_options}</label>
                <label className="min-order">(Min.Order)</label>
            </span>
        </div>
        <div className="col">
                <label className="old-price">{currency} {minOldPrice} - R {maxOldPrice}</label>
        </div>
    </div>
    );
  }
  export default Price;