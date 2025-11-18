import '../scss/reservationLine.scss'
import PropTypes from 'prop-types';
import { useContext, useMemo, useCallback } from 'react'; 

import { ReservationContext } from '../contexts/ReservationContext';
import { UserContext } from '../contexts/UserContext';
import { ModalContext } from '../contexts/ModalContext';

import { formatDate } from '../utils/dates';


// Importamos el componente Wrapper del modal
import ModifyReservationModal from './ModifyReservationModal';


const ReservationLine = ({ reservation }) => {

    const { deleteReservation, modifyReservation, startingDate } = useContext(ReservationContext);
    const { user } = useContext(UserContext);
    const { openModal, closeModal } = useContext(ModalContext);
    

    const isOwner = useMemo(() => 
        user && user.name === reservation.user, 
        [user, reservation.user]
    );

    // 🟢 CORRECCIÓN: Definición de handleDelete (restaurada)
    const handleDelete = useCallback((id) => {
        if (isOwner) {
            deleteReservation(id);
        }
    }, [isOwner, deleteReservation]);


    // Función handleModify (usando el componente Wrapper)
    function handleModify(id) {
        
        if (!isOwner) {
            return;
        }

        openModal({
            title: 'Modificar Reserva',
            size: 'lg',
            // Renderizamos el componente como un Elemento React.
            body: (
                <ModifyReservationModal
                    reservation={reservation}
                    startingDate={startingDate}
                    modifyReservation={modifyReservation}
                    closeModal={closeModal}
                />
            ),
            // El botón 'Aceptar' se movió al cuerpo del modal (dentro de ModifyReservationModal)
            footer: null, 
        });
    }

    return (
        <li className={`reservationLine ${isOwner ? "active" : ""}`  }  data-id={reservation.id}>

            <div className="info">
                <span className='id'>{reservation.id}</span>
                <span className='user'>{reservation.user}</span>
                <span className='date'>{formatDate(reservation.dateIn, 'abrv')}</span>
                <span className='date'>{formatDate(reservation.dateOut, 'abrv')}</span>
                <span className={`status badge rounded-pill text-bg-secondary ${reservation.status}`}> {reservation.status}</span>

            {
                (isOwner ) &&
                <span className="actions">
                    <span onClick={()=> handleModify(reservation.id)} className='modify'><span class="material-symbols-sharp">edit</span></span>
                            <span onClick={() => handleDelete(reservation.id)} className='delete'>
                                <span class="material-symbols-sharp">delete</span>
                    </span>
                </span>
            }
            </div>

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