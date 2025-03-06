import { useContext } from "react"
import DateLine from "../components/DateLine"

import { ReservationContext } from '../contexts/ReservationContext';

function Home() {

   const {reservations} = useContext(ReservationContext);


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Home</h3>
                    <ul className="dateList">

                        {!reservations.length && <p>No hay fechas reservadas..</p>}
                        
                        {reservations.map(
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
