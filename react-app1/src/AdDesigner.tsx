import React from 'react';
import { useState} from 'react';
import Button from './Button';
// import './AdDesigner.css';
import "./AdDesigner.css";
import { render } from '@testing-library/react';
import Ad from './components/Ad'


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


    return (
        <div className="ad-container">
            <h2 className="heading">Ad Designer</h2>
            <Ad flavor={iceCreamType} adFontSize = {fontSize} theme={colorTheme} />
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