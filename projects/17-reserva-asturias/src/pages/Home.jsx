import { useContext } from "react"
import ReservationLine from "../components/ReservationLine"
import { ReservationContext } from '../contexts/ReservationContext';
import { UserContext } from "../contexts/UserContext";

function Home() {

   const {reservations} = useContext(ReservationContext);
   const {user} = useContext(UserContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col">

                    <h3>Home</h3>
                    {user && <h5>{user.name}</h5>}
                    
                    <ul className="reservationList">

                        {!reservations.length && <p>No hay fechas reservadas..</p>}
                        
                        {reservations.map(
                            (reservation) => {
                              return  <ReservationLine key={reservation.id} reservation={reservation}></ReservationLine>
                            }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
