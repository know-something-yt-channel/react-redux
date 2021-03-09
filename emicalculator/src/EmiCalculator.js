import React from 'react';


function EmiCalculator(props) {

   const {p,i,t} = props; 
    let  r = ((i/12)/100);
    
  return (
      <div>
            { ~~( ( p * r * Math.pow ( ( 1 + r ) , t ) ) /  (Math.pow( (1 + r ) , t) - 1 ) )  }
      </div>
       
         
  );
}

export default EmiCalculator;
