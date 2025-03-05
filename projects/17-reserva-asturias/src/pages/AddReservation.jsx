import { useState } from 'react'
import MyDatePicker from '../components/MyDatePicker'
import '../scss/reservation.scss'

function AddReservation() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); 

    const initialDate = { 
        dateIn: tomorrow.toISOString().split('T')[0], // Formato YYYY-MM-DD
        dateOut: "" 
    };

    const [dates, setdates] = useState(initialDate);

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
                        <span className='dateIn'>{dates.dateIn || "--/--/----"} </span>
                        --- 
                        <span className='dateOut'>{dates.dateOut || "--/--/----"}</span>
                    </div>

                    <div className='reservationBlockFooter'>
                        <button className='btn btn-warning mt-5 btn-lg'>Reservar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReservation
