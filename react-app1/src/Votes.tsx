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

    // const [iceCreamType, setIceCreamType] = useState("Strawberry");
    const total = chocolateVote + vanillaVote + strawberryVote




    // const chocoClick = () => {
    //     totalVotes++;
    //     chocoVotes++
    //     setChocolateVote(chocoVotes + 1)
    //     setTotalVote(totalVotes + 1)
    //     // setIceCreamType("Chocolate");
    //     console.log(totalVotes)
    //     console.log(chocoVotes)
    //     console.log(chocolateVote)
    // }
    // const vanillaClick = () => {
    //     totalVotes++;
    //     vanillaVotes++
    //     setVanillaVote(vanillaVotes)
    //     setTotalVote(totalVotes)
    //     // setIceCreamType("Vanilla");
    // }
    // const strawbClick = () => {
    //     totalVotes++;
    //     strawbVotes++;
    //     setStrawberryVote(strawbVotes)
    //     setTotalVote(totalVotes)
    //     // setIceCreamType("Strawberry");
    // }



    const percentages = {
        chocolate: percentage(chocolateVote, total),
        vanilla: percentage(vanillaVote, total),
        strawberry: percentage(strawberryVote, total)
    }

    

    return(
        <div className="voteSection">
            <div className="whatToSupport">
                <h3>Vote Here</h3>
                {/* <Button iceCreamType="Chocolate"></Button> */}
                <button onClick={() => setChocolateVote(prev => prev + 1)}>Chocolate</button>
                <button onClick={() => setVanillaVote(prev => prev + 1)}>Vanilla</button>
                <button onClick={() => setStrawberryVote(prev => prev + 1)}>Strawberry</button>
            </div>
            <div className="graphSection">
                <div className="chocolateGraph" style={{width: percentages.chocolate}}><span>chocolate</span><span>{chocolateVote}({percentages.chocolate})</span></div>
                <div className="vanillaGraph" style={{width: percentages.vanilla}}><span>vanilla</span><span>{vanillaVote}({percentages.vanilla})</span></div>
                <div className="strawberryGraph" style={{width: percentages.strawberry}}><span>strawberry</span><span>{strawberryVote}({percentages.strawberry})</span></div>
            </div>
        </div>
    )
}

function percentage(n:number, total:number): string {
    if(total === 0){
        return "0.0%"
    }
    return((n/total)*100).toFixed(1) + "%"
}

export default Votes