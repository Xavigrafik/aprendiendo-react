import '../scss/reservationLine.scss'
import { Trash, Pencil } from "lucide-react";
import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ReservationContext } from '../contexts/ReservationContext';
import { UserContext } from '../contexts/UserContext';

import { formatDate } from '../utils/dates';


const ReservationLine = ({ reservation }) => {

    const { deleteReservation, modifyReservation, reservations } = useContext(ReservationContext);
    const { user } = useContext(UserContext);
    
    function handleDelete(id) {
        if (user && user.name == reservation.user ) {
            deleteReservation(id)
        }
        return
    }
    function handleModify(id) {
        if (user && user.name == reservation.user ) {
             modifyReservation(id)
        }
        return
    }

    return (
        <li className={`reservationLine ${user && user.name  == reservation.user ? "active" : ""}`} data-id={reservation.id}>

            <div className="info">
                <span className='id'>{reservation.id}</span>
                <span className='date'>{formatDate(reservation.dateIn, 'abrv')}</span>
                al <span className='date'>{formatDate(reservation.dateOut, 'abrv')}</span> - <span className='user'>{reservation.user}</span>
            </div>

            {
                (user && user.name  == reservation.user ) &&
                <div className="actions">
                    <span onClick={()=> handleModify(reservation.id)} className='modify'><Pencil size={24} /></span>
                    <span onClick={() => handleDelete(reservation.id)} className='delete'><Trash size={24} /></span>
                </div>
            }
        </li>
        
    )
}

ReservationLine.propTypes = {
    reservation: PropTypes.shape({
        id: PropTypes.number.isRequired,
        dateIn: PropTypes.instanceOf(Date).isRequired,
        dateOut: PropTypes.instanceOf(Date).isRequired,
        user: PropTypes.string.isRequired,
    }).isRequired,
};

export default ReservationLine
