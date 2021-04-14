import React from 'react';


function Test(){
    let array = [...Array(10).keys()];
    return (
          array.map((val,i)=>(
            <p key={i}>
                {val}
              </p>
          ))
  )
}

export default Test;