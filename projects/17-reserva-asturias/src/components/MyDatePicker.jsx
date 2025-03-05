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

export default MyDatePicker;
