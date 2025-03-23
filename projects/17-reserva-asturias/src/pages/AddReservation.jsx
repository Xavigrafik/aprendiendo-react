import { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { ReservationContext } from "../contexts/ReservationContext";
import { UserContext } from "../contexts/UserContext";
import { DateRangePicker, } from 'react-date-range';
import { formatDate } from '../utils/dates';
import { checkDates } from '../utils/checkDates'; // Importa la función de validación

import '../scss/reservation.scss';


function AddReservation() {
    
    const { reservations, addReservation } = useContext(ReservationContext);
    const { user } = useContext(UserContext);
    
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true)
    
    const startingDate = useMemo(() => new Date(), []);
    
    const [datePickerState, setDatePickerState] = useState([
        {
            startDate: startingDate,
            endDate: startingDate,
            key: 'selection'
        }
    ]);


    useEffect(() => {
        // Deshabilita el botón si ambas fechas son iguales a startingDate
        setButtonIsDisabled(
          datePickerState[0].startDate.getTime() === startingDate.getTime() &&
          datePickerState[0].endDate.getTime() === startingDate.getTime()
        );
    }, [datePickerState]);
    

    useEffect(() => {
        //console.log('buttonIsDisabled', buttonIsDisabled);
    }, [buttonIsDisabled]);


    const handleClearDates = () => {
        setDatePickerState([
            {
                startDate: startingDate,
                endDate: startingDate,
                key: 'selection'
            }
        ]
        )
        
    }

    const handleReservation = useCallback(() => {
        
        const isDateAllowed = checkDates(datePickerState[0].startDate, datePickerState[0].endDate);
        
        if (isDateAllowed) {
            const newReservation = {
                id: Date.now(),
                user: user.name,
                dateIn: datePickerState[0].startDate,
                dateOut: datePickerState[0].endDate,
            };
            addReservation(newReservation);
            handleClearDates();
        } else {
          console.log("Fechas no permitidas");
          // @TODO mostrar mensaje de error al usuario
        }

    }, [ addReservation, user, datePickerState]);

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
                    <div className='reservationBlockFooter row'>

                        <div className="col d-flex justify-content-end gap-3">
                             <button
                                onClick={handleClearDates}
                                className={`btn btn-link my-3 btn-sm ${buttonIsDisabled && "opacity-0"}`}>
                                Borrar fechas
                            </button>

                            <button
                                onClick={handleReservation}
                                disabled={buttonIsDisabled}
                                 className={`btn btn-warning my-3 px-4 btn-lg ${buttonIsDisabled && "opacity-0"}`}>
                                Reservar
                            </button>
                        </div>

                   

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