import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-date-range';

// Este componente AÍSLA el estado del DatePicker y gestiona la lógica interna.
// Nota: Ahora recibe las funciones del Contexto y las propiedades de la reserva como props.

const ModifyReservationModal = ({ 
    reservation, 
    startingDate, 
    modifyReservation, 
    closeModal 
}) => {
    
    // 🟢 ESTADO LOCAL DE HOOKS (Correcto porque estamos dentro de un componente)
    const [datePickerState, setDatePickerState] = useState([
        {
            startDate: reservation.dateIn,
            endDate: reservation.dateOut,
            key: 'selection',
        },
    ]);

    // 🟢 DEBEMOS DEVOLVER el footer al componente padre para que lo use el openModal.
    // Usamos el estado local del hook en el footer
    const handleAccept = useCallback(() => {
        const [finalSelection] = datePickerState; 
        
        modifyReservation(
            reservation.id,
            finalSelection.startDate,
            finalSelection.endDate
        );
        closeModal();
    }, [reservation.id, datePickerState, modifyReservation, closeModal]);


    // 🟢 El componente ahora retorna el elemento React (JSX) para el cuerpo del modal.
    return (
        <>
            <DateRangePicker
                onChange={(item) => {
                    setDatePickerState([item.selection]); 
                }}
                weekStartsOn={7}
                staticRanges={[]}
                inputRanges={[]}
                minDate={startingDate} 
                showDateDisplay={true}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={datePickerState} 
                editableDateInputs={true}
                direction="horizontal"
            />
            {/* 🔴 Opcional: Renderizar un footer dummy aquí, o... */}
            {/* 🟢 Pasamos la función al componente padre para que la use en el footer */}
            {/* Si no puedes pasar la función handleAccept por props de vuelta,
                la única forma es que el componente padre (ReservationLine) defina el footer. */}
            
            {/* ❌ NO PUEDES RETORNAR EL FOOTER. DEBES USAR UN PROP o un Context.
                Ajustamos el diseño para que el botón "Aceptar" esté dentro del modal body. */}

            <div className="modal-footer-custom-area">
                <button 
                    className="btn btn-primary" 
                    onClick={handleAccept} 
                >
                    Aceptar Modificación
                </button>
            </div>
        </>
    );
};

// ... (PropTypes)
// ...
export default ModifyReservationModal;