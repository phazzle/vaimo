import icon_ok from '../Icons/icons8-ok.png'

function Badge(props) {
    return (
        <div className="col">
            {props.badge.ready_to_ship
            ?<div className="read-to-ship-container"><label>Ready to Ship</label>
            </div>
            :<div></div>
            }

            {props.badge.in_stock 
            ?<div className="badge-container"><img src={icon_ok} alt="icon" className="icon"/>
            <label className="label-orange">In Stock</label>
            </div>
            :<div></div>
            }

            {props.badge.fast_dispatch 
            ?<div className="badge-container"><img src={icon_ok} alt="icon" className="icon"/>
            <label className="label-orange">Fast Dispatch</label>
            </div>
            :<div></div>
            }
        </div>

    );
  }
  export default Badge;