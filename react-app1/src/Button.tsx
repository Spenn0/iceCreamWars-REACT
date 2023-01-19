import React from 'react';
import { useState } from 'react';
import props from 'react';
import './Button.css';

function Button(props:any){
    const iceCreamType = props.type;
    console.log(iceCreamType);
    
    // const handleClick = (type:String) => {
    //     setIceCreamType(type);
    // }


    return(
        <button >{ iceCreamType }</button>
        // onClick={handleClick(iceCreamType)}
    )
}

export default Button