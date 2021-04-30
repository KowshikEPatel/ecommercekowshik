
import Card from './Card.js'
import List from './List.js'
import './App.css';
import {useState} from 'react'

function App() {
   

  let [cart,setCart] = useState([])
  let [disable, setDisable]=useState([])
  let addbuyitem=(obj)=>{
    
    setCart([...cart, obj])
    setDisable([...disable, obj.id])
  }
  
   const productData = [
     {
       id:0,
       name:"Item One",
       currency:"$",
       price:"24.99",
       features:[
         {
           name:"has processor"
         },
         {
          name:"has ram"
        },
        {
          name:"has hdd"
        },
        {
          name:"has USB port"
        },
        {
          name:"has HDMIport"
        },
       ] ,
       rating:3,
       isEnabled:false
     },
     {
      id:1,
      name:"Item Two",
      currency:"$",
      price:"24.99",
      features:[
        {
          name:"has processor"
        },
        {
         name:"has ram"
       },
       {
         name:"has hdd"
       },
       {
         name:"has USB port"
       },
       {
         name:"has HDMIport"
       },
      ] ,
      rating:5,
       isEnabled:false
    },
    {
      id:2,
      name:"Item Three",
      currency:"$",
      price:"24.99",
      features:[
        {
          name:"has processor"
        },
        {
         name:"has ram"
       },
       {
         name:"has hdd"
       },
       {
         name:"has USB port"
       },
       {
         name:"has HDMIport"
       },
      ],
      rating:4,
      isEnabled:false
    },
    {
      id:3,
      name:"Item Four",
      currency:"$",
      price:"24.99",
      features:[
        {
          name:"has processor"
        },
        {
         name:"has ram"
       },
       {
         name:"has hdd"
       },
       {
         name:"has USB port"
       },
       {
         name:"has HDMIport"
       },
      ],
      rating:3,
      isEnabled:false
    },
    {
      id:4,
      name:"Item Five",
      currency:"$",
      price:"24.99",
      features:[
        {
          name:"has processor"
        },
        {
         name:"has ram"
       },
       {
         name:"has hdd"
       },
       {
         name:"has USB port"
       },
       {
         name:"has HDMIport"
       },
      ],
      rating:5,
      isEnabled:false
    },
    {
      id:5,
      name:"Item Six",
      currency:"$",
      price:"24.99",
      features:[
        {
          name:"has processor"
        },
        {
         name:"has ram"
       },
       {
         name:"has hdd"
       },
       {
         name:"has USB port"
       },
       {
         name:"has HDMIport"
       },
      ],
      rating:1,
      isEnabled:false
    }
    

   ]
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light bg-dark">
        <a className="navbar-brand" >Bootstrap ecommerce site</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Features</a>
            </li>
          </ul>
        </div>
      </nav>

    <br></br>
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
        <p className="h1">Ecommerce</p>
        <ul className="list-group" id="shoppingcart">
        {
          cart.map((obj)=>{
          return <li className="list-group-item">{obj.name}</li>
        })}
        </ul>
        </div>
        <div className="col-sm-9">
          <div className="container">
            <div className="row" id="rowelement">
              {productData.map(obj=>{
                return <Card name={obj.name} 
                currency={obj.currency} 
                price={obj.price}
                features={obj.features}
                rating={obj.rating} 
                productData={obj}
                handleBuy={addbuyitem}
                cartlist={disable}>

                </Card>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
