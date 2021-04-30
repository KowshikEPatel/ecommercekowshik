import Starso from './Starso.js'
import Star from './Starsd.js'
import './App.css';


export default function Card(props){
    
    let n=props.rating;
    console.log( "cartlist",props.cartlist)
    let value= props.cartlist.includes(props.productData.id)
    console.log(value)
    return <div className="col-sm-4">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">{props.name}</h4>
                    </div>
                    <div className="card-body">
                        <h4>{props.currency}{props.price}</h4>
                        <ul id="features">
                            {props.features.map((element)=>{
                                return <li>{element.name}</li>
                            }) }
                        </ul>
                    </div>
                
                    <div className="card-footer text-muted">   
                    {Array(n).fill(<Star></Star>)} 
                    {Array(5-n).fill(<Starso></Starso>)}
                    <p></p>
                    <button className="btn btn-primary" onClick={()=>{props.handleBuy(props.productData)}} disabled={value}>Buy </button>
                    </div>
                </div>

    </div>
}