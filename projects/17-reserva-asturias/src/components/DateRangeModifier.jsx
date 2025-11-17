import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-date-range';
import { ReservationContext } from '../contexts/ReservationContext';
import { useContext } from 'react';

const DateRangeModifier = ({ initialSelection, onDatesChange, startingDate }) => {
    
    // 1. 🟢 El estado del calendario AHORA VIVE DENTRO DEL MODAL (componente).
    const [datePickerState, setDatePickerState] = useState(initialSelection);
    
    // Logs para seguimiento
    console.log("DateRangeModifier: Renderizando con estado:", datePickerState[0].startDate);

    const handleOnChange = (item) => {
        const newSelection = item.selection;
        
        // Log para ver la selección entrante
        console.log("DateRangeModifier: Selección entrante (item.selection):", newSelection.startDate, newSelection.endDate);
        
        // 2. Actualiza el estado local del calendario (Garantiza re-render del Picker)
        setDatePickerState([newSelection]);

        // 3. Llama a la función del padre para sincronizar con el botón Aceptar
        onDatesChange([newSelection]);
    };

    return (
        <DateRangePicker
            onChange={handleOnChange}
            weekStartsOn={7}
            staticRanges={[]}
            inputRanges={[]}
            minDate={startingDate} 
            showDateDisplay={true}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={datePickerState} // Usa el estado LOCAL
            editableDateInputs={true}
            direction="horizontal"
        />
    );
};

DateRangeModifier.propTypes = {
    initialSelection: PropTypes.array.isRequired,
    onDatesChange: PropTypes.func.isRequired,
    startingDate: PropTypes.instanceOf(Date),
};

export default DateRangeModifier;