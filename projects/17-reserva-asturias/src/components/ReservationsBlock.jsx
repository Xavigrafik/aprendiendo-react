import { useContext } from 'react'
import ReservationLine from '../components/ReservationLine'
import { ReservationContext } from '../contexts/ReservationContext'
import { UserContext } from '../contexts/UserContext'

const ReservationsBlock = () => {
    const { reservations } = useContext(ReservationContext)
    const { user } = useContext(UserContext)

    return (
        <>
            <ul className="reservationList">
                {!reservations.length && <p>No hay fechas reservadas..</p>}

                 <li className={`reservationLine header`}>
                    <div className="info">
                        <span className='id'>id</span>
                        <span className='date'>Date in</span>
                        <span className='date'>Date out</span>
                        <span className='user'>User</span>
                        <span className={`status`}> Status</span>
                    </div>
                </li>

                {reservations.map((reservation) => {
                    return (
                        <ReservationLine
                            key={reservation.id}
                            reservation={reservation}
                        ></ReservationLine>
                    )
                })}
            </ul>


        </>
    )
}

export default ReservationsBlock
