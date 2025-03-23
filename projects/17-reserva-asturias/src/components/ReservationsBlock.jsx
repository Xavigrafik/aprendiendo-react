import { useContext } from 'react'
import ReservationLine from '../components/ReservationLine'
import { ReservationContext } from '../contexts/ReservationContext'
import { UserContext } from '../contexts/UserContext'
import  MyModal  from './MyModal'

const ReservationsBlock = () => {
    const { reservations } = useContext(ReservationContext)
    const { user } = useContext(UserContext)

    return (
        <>
            <ul className="reservationList">
                {!reservations.length && <p>No hay fechas reservadas..</p>}

                {reservations.map((reservation) => {
                    return (
                        <ReservationLine
                            key={reservation.id}
                            reservation={reservation}
                        ></ReservationLine>
                    )
                })}
            </ul>

            <MyModal>
                <h3>EEOO__27</h3>
            </MyModal>
        </>
    )
}

export default ReservationsBlock
