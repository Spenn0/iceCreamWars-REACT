import React from 'react';
import { useState} from 'react';
// import Button from './Button';
// import './AdDesigner.css';
import { render } from '@testing-library/react';
import {AdProps} from './AdPropsInterface'


function Ad({flavor, adFontSize, theme}:AdProps){
//props.flavor
//props.fontSize
//props.darkTheme




const userStyles = {
    lightDark:{
        backgroundColor: theme ? "white" : "black",
        color: theme ? "black" : "white",
    }
}
    return(
        <div className="ad" style={{backgroundColor: userStyles.lightDark.backgroundColor, color: userStyles.lightDark.color}}>
        <p style={{fontSize: adFontSize + "px"}}>Vote For</p>
        <p className="iceCreamType" style={{fontSize: adFontSize + "px"}}>{ flavor }</p>
    </div>
    )
}

export default Ad;