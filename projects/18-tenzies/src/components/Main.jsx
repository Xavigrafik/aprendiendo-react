import { useState, useEffect } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'

export default function Main() {

    const TOTALDICE = 10;

    const [dice, setDice] = useState(generateAllNewDice())
    const [holdingNum, setHoldingNum] = useState(null);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld); 
        setGameWon(allHeld);
    }, [dice]);

    function rollDice() {
        if (gameWon) {
            // Reset del juego
            setDice(generateAllNewDice());
            setHoldingNum(0);
            setGameWon(false);
        } else {
            setDice((oldDice) =>
                oldDice.map((die) =>
                    die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
                )
            );
        }   
    }


    function hold(id) {
        const newHoldingNum = dice.find((die) => die.id === id).value;
        // console.log('newHoldingNum: ', newHoldingNum);
        
        if (holdingNum === null) {
            setHoldingNum(newHoldingNum);
            setDice(oldDice =>
                oldDice.map(die =>
                    die.id === id ? { ...die, isHeld: true } : die
                )
            );

        } else if (holdingNum === newHoldingNum) {
            setDice(oldDice =>
                oldDice.map(die =>
                    die.id === id ? { ...die, isHeld: !die.isHeld } : die
                )
            );
        }
    }


    function generateAllNewDice() {
        return new Array(TOTALDICE).fill(0).map(() => ({
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
        }))
    }


    return (
        <main className={`main`}>
            <div className="dice-container">
                {dice.map(die => (
                    <Die key={die.id} value={die.value} isHeld={die.isHeld} hold={() => hold(die.id)} />
                ))}
            </div>
            <button className={`btn ${gameWon && 'reset'}`} onClick={rollDice}>
                {gameWon ? "Reset" : "Roll"}
            </button>

        </main>
    )
}
