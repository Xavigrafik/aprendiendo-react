import '../scss/reservationLine.scss'
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { DateRangePicker } from 'react-date-range';

import { ReservationContext } from '../contexts/ReservationContext';
import { UserContext } from '../contexts/UserContext';
import { ModalContext } from '../contexts/ModalContext';

import { formatDate } from '../utils/dates';
import { Trash, Pencil } from "lucide-react";


const ReservationLine = ({ reservation }) => {

    const { deleteReservation, modifyReservation, startingDate } = useContext(ReservationContext);
    const { user } = useContext(UserContext);
    const { openModal, closeModal, isModalOpen } = useContext(ModalContext);
    

    const [datePickerState, setDatePickerState] = useState([
        {
            startDate: reservation.dateIn,
            endDate: reservation.dateOut,
            key: 'selection',
        },
    ]);
    
    function handleDelete(id) {
        if (user && user.name == reservation.user) {
            deleteReservation(id)
        }
        return
    }

    const modiFyModalBody = (
        
        <DateRangePicker
            onChange={(item) => {
                console.log("Antes de la actualización:", datePickerState);
                const newSelection = item.selection;
                setDatePickerState([newSelection]);
                console.log("Después de la actualización:", [newSelection]);
        }}
            weekStartsOn={7}
            staticRanges={[]}
            inputRanges={[]}
            minDate={null}
            showDateDisplay={true}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={datePickerState}
            direction="horizontal"
        />
        
    )
    
    function handleModify(id) {
        if (user && user.name == reservation.user ) {
            openModal({
                title: 'Notificación',
                size: 'lg',
                body: modiFyModalBody,
                footer: <button className="btn btn-primary"  onClick={() => {
                    modifyReservation(id, datePickerState[0].startDate, datePickerState[0].endDate);
                    closeModal();
                }}>Aceptar</button>,
            });
            
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
