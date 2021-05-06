import React from 'react';
import './App.css';

/* Components */
import ImageHolder from './components/image_component';
import Badge from './components/badge_component';
import HotSelling from './components/hotSelling_component';
import Rate from './components/rate_component';
import Price from './components/price_component';
import Expo from './components/expo_component';
import Discount from './components/discount_component';
import Trade from './components/trade_component';
import Payment from './components/payment_component';
import Links from './components/links_component';
import Summary from './components/summary_component';
import Loading from './components/loading_component';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      error:null,//error meassage
      isLoaded:false, //check if is loading
      product:[],//list of products get from url
      reviewStars:0,//number of stars rating
      options:0,//number of options in a product
      checkedOptions:[],//list of checked options
      availableOptions:[],//list of available otions in this case (3)
      lastValue:0,//last value before adding or removing item
      total:0 //total before shippping.

    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  //Get data from the url and store it in product array.
  componentDidMount() {
    fetch("https://fe-assignment.vaimo.net/")
      .then(res => res.json())
      .then(
        (result) => {
          var el_keys=[];
          var opt =result.product.options;
          Object.keys(opt).map(i=>el_keys.push(i));
          for(let x =0;x< el_keys.length;x++)
          {
            this.setState(prevState=>({
              availableOptions:[...prevState.availableOptions,(
                {name:opt[el_keys[x]].label.trim(),qty:0,unit_price:opt[el_keys[x]].price.value})]
            }))
     
          }


          this.setState({
            isLoaded: true,
            product: result.product,
            reviewStars: parseInt(result.product.reviews.rating),
            options: Object.values(result.product.options).length
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

//handleAdd function gets called when a user click add or minus
//it will check which button was clicked and pass name and sign of the button
//depending on the sign it will add or minus
  handleAdd(name,sign){
    //do something
    var avil = this.state.availableOptions;
    var _total = this.state.total;
    for(let x=0; x<Object.values(this.state.availableOptions).length;x++)
    {
    

      if(this.state.availableOptions[x].name === name){
        if(sign ==="+")
        {
          avil[x].qty +=1;
          _total += avil[x].unit_price;
        }
        else{
          if(avil[x].qty>0)
          {
            avil[x].qty -=1;
            _total-=avil[x].unit_price;
          } 
        }
        
      }
    }
    _total = (_total <0) ? 0 : _total; 
    _total = Math.round(_total*100.0)/100.0
    this.setState({availableOptions:avil,total:_total});
    console.log(this.state.availableOptions);
    console.log("Total :"+_total);
  }

  //update when a user changes on the textbox
  handleChange(event){
    var el = event.target.dataset.for;
    var value = parseInt(event.target.value);
    var avil = this.state.availableOptions;
    var _total = this.state.total;
    for(let x=0; x<Object.values(this.state.availableOptions).length;x++)
    {
      
      if(this.state.availableOptions[x].name === el){
        this.setState({lastValue : avil[x].qty });
        value= isNaN(value)?this.state.lastValue:value;
        if(value>-1)
        {
          avil[x].qty = value;
          _total += avil[x].unit_price+0*value;
          _total = Math.round(_total*100.0)/100.0
        }

      }
    }
    console.log("Total :"+_total);
    this.setState({availableOptions:avil,total:_total});
    console.log(this.state.availableOptions);
  
  }

  handleBlur(event){

    var el = event.target.dataset.for;
    var value = parseInt(event.target.value);
    var avil =  this.state.availableOptions;
    for(let x=0; x<Object.values(this.state.availableOptions).length;x++)
    {
      if(this.state.availableOptions[x].name === el){
          if(isNaN(value) || value<-1)
          {
            value = this.state.lastValue;
          }
          avil[x].qty = value;
      }
    }
    this.setState({availableOptions:avil});
    console.log(this.state.availableOptions);
  }

  //Create a list of options with a textbox minus and add button
  createProduct(n){
    var el_keys=[];
    var elements=[];
    Object.keys(n).map(i=>el_keys.push(i));
    for(let i =0 ; i< Object.keys(n).length;i++)
    {
      elements.push(
        <div className="row space-bottom-by-12" key={n[el_keys[i]].label}>
        <div className="col">
            <div className="col-5"><label className="product-text">{n[el_keys[i]].label}</label></div>
            <div className="col-2"><label className="product-text">
              {n[el_keys[i]].price.currency.symbol} {n[el_keys[i]].price.value}
              </label></div>
            <div className="col-5-container flex">
            <button className="button button-add"
            onClick={()=>this.handleAdd(n[el_keys[i]].label.trim(),"-")}
            disabled={this.state.availableOptions[i].qty<1}
            >-</button>
            <input type="number" className="text-box"
            data-for={n[el_keys[i]].label.trim()} 
            onChange={this.handleChange} 
            onBlur={this.handleBlur}
            value={this.state.availableOptions[i].qty}/>
            <button className="button button-add"
            onClick={()=>this.handleAdd(n[el_keys[i]].label.trim(),"+")}
            >+</button>
            </div>

        </div>
     </div>

        
      );
    }
    return elements;
  }

  render(){
    const {error , isLoaded, product, reviewStars,total}= this.state;

    if(error){
      return <div>Error:{error.message}</div>;
    }
    else if(!isLoaded){
      return <Loading/>
    }
    else{
      return(
        <div className="container pad-by-48">
          <div className="row flex-col">
                {/*--Image div-*/}
                <div className="col-4-div lg">
                <ImageHolder url={product.gallery[0].main}/>
                </div>
                {/*end Image div */}

                {/*info box*/}
                <div className="col-5-div ">
                <Badge badge={product.shipping.props} />

                {/*hot selling box*/}
                <HotSelling name={product.name} tags= {product.tags}/>
                {/*end hot selling box*/}

                {/*Rating box*/}
                  <Rate stars={reviewStars} rate={product.reviews.rating}
                   reviews={product.reviews.count} 
                   buyers={product.reviews.total_buyers} />
                {/*end Rating box*/}

                        {/*Price box*/}
                        <Price price={product.options} />
                        {/*end Price box*/}

                        {/*Expo box*/}
                          <Expo/>
                         {/*end Expo box*/}

                         {/* Discount box*/}
                          <Discount amount={product.discount.amount} date={product.discount.end_date} />
                         {/*end Discount box*/}

                         {/* Product box*/}
                         <div className="col">
                             <div className="row flex">
                                 <div className="col-2-option">
                                    <div className="col">
                                        <label className="option-text">Options:</label>
                                    </div>
                                 </div>
                                 <div className="col-10">
                                 {this.createProduct(product.options)}
                                 </div>

                             </div>
                         </div>
                        {/* end Product box*/}

                         {/*Trade box*/}
                          <Trade/>
                         {/*end Trade box*/}

                         {/*Payment*/}
                         <Payment/>

                         {/*Links*/}
                         <Links/>

                </div>
                {/* end info box*/}

                <div className="col-3-div pad-by-24 ">
                    <Summary 
                    shipCountry={product.shipping.method.country}
                    leadTime={product.shipping.lead_time.value}
                    shipTime={product.shipping.method.shipping_time.value}
                    total={total}
                    symbol={product.shipping.method.cost.currency.symbol}
                    />
                </div>
          </div>
        </div>
      );
    }

  }

}

export default App;
