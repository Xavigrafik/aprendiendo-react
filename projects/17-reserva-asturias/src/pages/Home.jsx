import { useState } from "react"
import DateLine from "../components/DateLine"

function Home() {


    const initialDates = [
        { id: 4, user: 'Guille 2', dateIn: '04/04/2020', dateOut: '25/06/2024' },
        { id: 1, user: 'Xavier', dateIn: '01/04/2020', dateOut: '24/04/2021' },
        { id: 2, user: 'Vicens', dateIn: '02/04/2020', dateOut: '24/05/2022' },
        { id: 3, user: 'Guille', dateIn: '03/04/2020', dateOut: '25/06/2023' },
    ]

    // ORDENA POR FECHA DE ENTRADA
    initialDates.sort(function (a, b) {
        if (a.dateIn > b.dateIn) {
          return 1;
        }
        if (a.dateIn < b.dateIn) {
          return -1;
        }
        return 0;
    });
    

    const [dates, setDates] = useState(initialDates);


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Home</h3>
                    <ul className="dateList">

                        {!dates.length && <p>No hay fechas reservadas..</p>}
                        
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
