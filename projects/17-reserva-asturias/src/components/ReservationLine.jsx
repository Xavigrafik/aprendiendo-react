import '../scss/reservationLine.scss'
import { Trash, Pencil } from "lucide-react";

const ReservationLine = ({ reservation }) => {
    return (
        <li className="reservationLine">

            <div className="info">
                <span className='id'>{reservation.id}</span>
                <span className='date'>{reservation.dateIn}</span> &lt;--&gt; <span className='date'>{reservation.dateOut}</span> - <span className='user'>{reservation.user}</span>
            </div>

            <div className="actions">
                <span className='modify'><Pencil size={24}/></span>
                <span className='delete'><Trash size={24}/></span>
            </div>
        </li>
    )
}

export default ReservationLine
