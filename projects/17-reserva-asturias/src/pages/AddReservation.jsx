import { useState, useContext, useEffect, useCallback } from 'react';
import { ReservationContext } from "../contexts/ReservationContext";
import { UserContext } from "../contexts/UserContext";
import { DateRangePicker } from 'react-date-range';
import '../scss/reservation.scss';
import { formatDate } from '../utils/dates';


function AddReservation() {

    const { reservations, addReservation } = useContext(ReservationContext);
    const { user } = useContext(UserContext);

    const [datePickerState, setDatePickerState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    useEffect(() => {
        console.log(datePickerState);
    }, [datePickerState]);

    const handleReservation = useCallback(() => {
        
        const newReservation = {
            id: (reservations.length + 1),
            user: user.name,
            dateIn: datePickerState[0].startDate,
            dateOut: datePickerState[0].endDate,
        };
        console.log(newReservation);
        addReservation(newReservation);

    }, [reservations, addReservation, user, datePickerState]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-auto reservationBlock">
                    {user && <h3 className='title'>Bienvenido {user.name}</h3>}
                    <DateRangePicker
                        onChange={item => {
                            const newSelection = item.selection;
                            if (
                                newSelection.startDate !== datePickerState[0].startDate ||
                                newSelection.endDate !== datePickerState[0].endDate
                            ) {
                                setDatePickerState([newSelection]);
                            }
                        }}
                        staticRanges={[]}
                        inputRanges={[]}
                        minDate={new Date()}
                        showDateDisplay={true}
                        showSelectionPreview={false}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={datePickerState}
                        direction="horizontal"
                    />
                    <div className='reservationBlockFooter'>
                        {(datePickerState[0].startDate && datePickerState[0].endDate) &&
                            <button
                                onClick={handleReservation}
                                className='btn btn-warning my-3 btn-lg'>
                                Reservar
                            </button>
                        }
                    </div>
                </div>
            </div>
            <div className='alert alert-info mt-3'>
                <p>Default: {formatDate(datePickerState[0].startDate)}</p>
                <p>kebap: {formatDate(datePickerState[0].startDate, 'kebap')}</p>
                <p>slash: {formatDate(datePickerState[0].startDate, 'slash')}</p>
                <p>abrv: {formatDate(datePickerState[0].startDate, 'abrv')}</p>
                <p>short: {formatDate(datePickerState[0].startDate, 'short')}</p>
                <p>long: {formatDate(datePickerState[0].startDate, 'long')}</p>
        </div>
        </div>
    );
}

export default AddReservation;