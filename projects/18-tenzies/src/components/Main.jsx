import { useState } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'

export default function Main() {
    const [dice, setDice] = useState(generateAllNewDice())
    const [holdingNum, setHoldingNum] = useState(0)

    function rollDice() {
        setDice((oldDice) =>
            oldDice.map((die) =>
                die.isHeld
                    ? die
                    : { ...die, value: Math.ceil(Math.random() * 6) }
            )
        )
    }

    function hold(id) {
        const clickedDie = dice.find((die) => die.id === id);
        const newHoldingNum = clickedDie.value;
        console.log(clickedDie,newHoldingNum);
        

        if (holdingNum === 0) {
            setHoldingNum(newHoldingNum) // Se actualiza el estado con el valor del primer click
            console.log('newHoldingNum:', newHoldingNum)
        } else {
            console.log('else...',holdingNum,  newHoldingNum );
            if (holdingNum == newHoldingNum ) {
                console.log('elsito');
                
                setDice((oldDice) => {
                    return oldDice.map((die) => {
                        return die.id == id ? { ...die, isHeld: !die.isHeld } : die
                    })
                })
            }
        }
    }

    function generateAllNewDice() {
        return new Array(10).fill(0).map(() => ({
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
        }))
    }

    const diceElements = dice.map((dieObj) => {
        return (
            <Die
                id={dieObj.id}
                key={dieObj.id}
                value={dieObj.value}
                isHeld={dieObj.isHeld}
                hold={() => hold(dieObj.id)}
            />
        )
    })

    return (
        <main className="main">
            <div className="dice-container">{diceElements}</div>
            <button className="btn" onClick={rollDice}>
                Roll
            </button>
        </main>
    )
}
