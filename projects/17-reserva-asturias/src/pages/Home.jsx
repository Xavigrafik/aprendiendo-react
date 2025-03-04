import { useState } from "react"
import DateLine from "../components/DateLine"

function Home() {


    const initialDates = [
        { id:1, user: 'Xavier', date: '2022/04/24' },
        { id:2, user: 'Vicens', date: '2022/05/24' },
        { id:3, user: 'Guille', date: '2022/06/25' },
    ]

    const [dates, setDates] = useState(initialDates);


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Home</h3>
                    <ul className="dateList">
                        {dates.map(
                            (line) => {
                              return  <DateLine key={line.id} line={line}></DateLine>
                            }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
