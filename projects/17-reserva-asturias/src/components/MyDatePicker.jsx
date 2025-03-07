import PropTypes from 'prop-types';

const MyDatePicker = ({ name, selectedDate, setdates }) => {
    const handleChange = (e) => {
        setdates(prev => ({
            ...prev,
            [name]: e.target.value // Actualiza solo la fecha correspondiente
        }));
    };

    return (
        <input 
            type="date" 
            name={name}
            value={selectedDate} 
            onChange={handleChange}
        />
    );
};

MyDatePicker.propTypes = { // Definición de propTypes después de MyDatePicker
    name: PropTypes.string.isRequired,
    selectedDate: PropTypes.string.isRequired,
    setdates: PropTypes.func.isRequired,
};

export default MyDatePicker;