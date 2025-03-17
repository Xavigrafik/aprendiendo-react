import PropTypes from 'prop-types';

const MyDatePicker = ({ name, selectedDate, setdates }) => {

    const handleChange = (e) => {
        setdates(prev => ({
            ...prev,
            [name]: e.target.value // Actualiza solo la fecha correspondiente
        }));
    };

    const today = new Date().toISOString().split('T')[0];
    console.log('today: ', today);
    
    // const nextWeek = () => {
    //     const today = new Date();
    //     const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
        
    //     return nextWeek.toISOString().split('T')[0]; // Extrae la parte de la fecha en formato YYYY-MM-DD
    // };
    
    // console.log(nextWeek());
    

    return (
        <input 
            type="date"
            min={today}
            // max={nextweek}
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