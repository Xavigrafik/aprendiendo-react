import { useState } from "react";
import Die from "./Die";

export default function Main() {

    function handleClick() {
        console.log('reload');
        setDice(generateAllNewDice());
        
    }

    function generateAllNewDice() {
        let newDice = []
        for (let i = 0; i < 10; i++) {
            const random = Math.ceil(Math.random() * 6);
            newDice.push(random);
        }
        
        return newDice;
    }


    const [dice, setDice] = useState(generateAllNewDice)

    const diceElements = dice.map((die, index) => {
        return <Die key={index} value={die} />
    })


    
    return (
        <main className="main">
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="btn" onClick={handleClick}>Roll</button>
        </main>
    )
}