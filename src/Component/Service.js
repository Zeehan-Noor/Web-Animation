
import "./Service.css";

import React from 'react';
import  Serviceitem  from "./Service.json";

import Button from '@material-ui/core/Button';

function Service() {
  console.log(Serviceitem);
return (
    <div  >
        
    <div className="productcontainer">
      {Object.keys(Serviceitem).map(keyName =>{
        const Service = Serviceitem[keyName];
        return(
        <div 
        style={{ color: 'inherit', textDecoration: 'inherit' }}
        key={keyName} 
        className="link"
        > 
        <img src={Service.img} height={300} width={200}  alt="Shoe" />
        <h4>{Service.name}</h4> 
        <h4>{Service.price}</h4>
        <Button variant="contained" color="secondary">
        Add To Cart
      </Button>
        </div>
        )
      })}
    </div>
     
    
    </div>
  );
}

export default Service;