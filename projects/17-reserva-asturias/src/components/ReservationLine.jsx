import '../scss/reservationLine.scss'
import { Trash, Pencil } from "lucide-react";
import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ReservationContext } from '../contexts/ReservationContext';
import { UserContext } from '../contexts/UserContext';




const ReservationLine = ({ reservation }) => {

    const { deleteReservation } = useContext(ReservationContext);
    const { user } = useContext(UserContext);
    
    function handleDelete(id) {
        if (user.name == reservation.user ) {
            deleteReservation(id)
        }
        return
    }

    return (
        <li className="reservationLine">

            <div className="info">
                <span className='id'>{reservation.id}</span>
                <span className='date'>{reservation.dateIn}</span> &lt;--&gt; <span className='date'>{reservation.dateOut}</span> - <span className='user'>{reservation.user}</span>
            </div>

            {
                (user.name == reservation.user ) &&
                <div className="actions">
                    <span className='modify'><Pencil size={24} /></span>
                    <span onClick={() => handleDelete(reservation.id)} className='delete'><Trash size={24} /></span>
                </div>
            }
        </li>
    )
}

ReservationLine.propTypes = {
    reservation: PropTypes.shape({
        id: PropTypes.number.isRequired,
        dateIn: PropTypes.string.isRequired,
        dateOut: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
    }).isRequired,
};

export default ReservationLine
