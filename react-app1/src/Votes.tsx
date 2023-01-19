import React from 'react';
import { useState} from 'react';
import Button from './Button';
import './Votes.css';
import { render } from '@testing-library/react';
import AdDesigner from './AdDesigner';

function Votes(){

    const [chocolateVote, setChocolateVote] = useState(0);
    const [vanillaVote, setVanillaVote] = useState(0);
    const [strawberryVote, setStrawberryVote] = useState(0);
    const [totalVote, setTotalVote] = useState(0)

    // const [iceCreamType, setIceCreamType] = useState("Strawberry");

    let totalVotes = 0;
    let chocoVotes = 0;
    let vanillaVotes = 0;
    let strawbVotes = 0;




    const chocoClick = () => {
        totalVotes++;
        chocoVotes++
        setChocolateVote(chocoVotes)
        setTotalVote(totalVotes)
        // setIceCreamType("Chocolate");
        console.log(totalVotes)
        console.log(chocoVotes)
        console.log(chocolateVote)
    }
    const vanillaClick = () => {
        totalVotes++;
        vanillaVotes++
        setVanillaVote(vanillaVotes)
        setTotalVote(totalVotes)
        // setIceCreamType("Vanilla");
    }
    const strawbClick = () => {
        totalVotes++;
        strawbVotes++;
        setStrawberryVote(strawbVotes)
        setTotalVote(totalVotes)
        // setIceCreamType("Strawberry");
    }


    const graphWidth = {
        chocoWidth:{
            width: chocoVotes/totalVotes + "%"
        },
        vanillaWidth:{
            width: vanillaVotes/totalVotes + "%"
        },
        strawbWidth:{
            width: strawbVotes/totalVotes + "%"
        }


    }

    return(
        <div className="voteSection">
            <div className="whatToSupport">
                <h3>What To Support</h3>
                {/* <Button iceCreamType="Chocolate"></Button> */}
                <button onClick={chocoClick}>Chocolate</button>
                <button onClick={vanillaClick}>Vanilla</button>
                <button onClick={strawbClick}>Strawberry</button>
            </div>
            <div className="graphSection">
                <div className="chocolateGraph" style={graphWidth.chocoWidth}><span>chocolate</span><span>{chocolateVote} ({chocolateVote/totalVote * 100}%)</span></div>
                <div className="vanillaGraph" style={graphWidth.vanillaWidth}><span>vanilla</span><span>{vanillaVote} ({vanillaVote/totalVote * 100}%)</span></div>
                <div className="strawberryGraph" style={graphWidth.strawbWidth}><span>strawberry</span><span>{strawberryVote} ({strawberryVote/totalVote * 100}%)</span></div>
            </div>
        </div>
    )
}

export default Votes