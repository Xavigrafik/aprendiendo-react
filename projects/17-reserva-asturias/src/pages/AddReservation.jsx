import { useState, useContext } from 'react'
import MyDatePicker from '../components/MyDatePicker'
import '../scss/reservation.scss'
import { ReservationContext } from "../contexts/ReservationContext";


function AddReservation() {

    const { reservations, addReservation } = useContext(ReservationContext);
    
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); 

    const initialDate = { 
        dateIn: tomorrow.toISOString().split('T')[0], // Formato YYYY-MM-DD
        dateOut: "" 
    };

    const emptyDate = "dd/mm/aaaa"

    const [dates, setdates] = useState(initialDate);

    const handleReservation = () => {

        const newReservation = {
            id: (reservations.length + 1),
            user: 'Xavi AAA',
            dateIn: dates.dateIn,
            dateOut: dates.dateOut
        }

        console.log('handleReservation');
        
        addReservation(newReservation);

        console.log([...reservations, newReservation]);
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 reservationBlock">
                    <h3 className='title'>AddReservation</h3>

                    <div className='d-flex mb-3'>
                        <MyDatePicker name="dateIn" selectedDate={dates.dateIn} setdates={setdates} />
                        <MyDatePicker name="dateOut" selectedDate={dates.dateOut} setdates={setdates} />
                    </div>

                    <div className='dates'>
                        <h5 className='mb-4 mt-5'>Fechas elegidas:</h5>
                        <span className='dateIn'>{dates.dateIn || emptyDate } </span>
                        --- 
                        <span className='dateOut'>{dates.dateOut || emptyDate}</span>
                    </div>

                    <div className='reservationBlockFooter'>
                        {(dates.dateOut && dates.dateIn) && 
                            <button
                                onClick={handleReservation}
                                className='btn btn-warning mt-5 btn-lg'>
                        Reservar
                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReservation
