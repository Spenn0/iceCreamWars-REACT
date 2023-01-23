import React from 'react';
import { useState} from 'react';
import Button from './Button';
import './AdDesigner.css';
import { render } from '@testing-library/react';


function AdDesigner() {
    const [iceCreamType, setIceCreamType] = useState("Strawberry");
    const [colorTheme, setColorTheme] = useState(true);
    const [fontSize, setFontSize] = useState(20);

    const chocoClick = () => {
        setIceCreamType("Chocolate");
    }
    const vanillaClick = () => {
        setIceCreamType("Vanilla");
    }
    const strawbClick = () => {
        setIceCreamType("Strawberry");
    }
    const lightClick = () => {
        setColorTheme(true);
     
    }
    const darkClick = () => {
        setColorTheme(false);
    }
    const upClick = () => {
        setFontSize(fontSize + 1);
        console.log(fontSize)
    }
    const downClick = () => {
        setFontSize(fontSize - 1);
        console.log(fontSize)
    }

    const userStyles = {
        lightDark:{
            backgroundColor: colorTheme ? "white" : "black",
            color: colorTheme ? "black" : "white",
        }
    }

        // let fontSizeStyle = {
        //     fontsize: fontSize + "px;"
        // };
    

    return (
        <div className="ad-container">
            <h2 className="heading">Ad Designer</h2>
            <div className="ad" style={userStyles.lightDark}>
                <p style={{fontSize: fontSize + "px"}}>Vote For</p>
                <p className="iceCreamType" style={{fontSize: fontSize + "px"}}>{ iceCreamType }</p>
            </div>
            <div className="whatToSupport">
                <h3>What To Support</h3>
                {/* <Button iceCreamType="Chocolate"></Button> */}
                <button onClick={chocoClick}>Chocolate</button>
                <button onClick={vanillaClick}>Vanilla</button>
                <button onClick={strawbClick}>Strawberry</button>
            </div>
            <div className="colorTheme">
                <h3>Color Theme</h3>
                <button onClick={lightClick}>Light</button>
                <button onClick={darkClick}>Dark</button>
            </div>
            <div className="fontSize">
                <h3>Font Size</h3>
                <button onClick={upClick}>Up</button>
                <button onClick={downClick}>Down</button>
            </div>
        </div>

    )
}

export default AdDesigner