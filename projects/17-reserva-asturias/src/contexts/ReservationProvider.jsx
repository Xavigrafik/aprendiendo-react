import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import { ReservationContext } from './ReservationContext';




export const ReservationProvider = ({ children }) => {

    const initialReservations = [
        { id: 100, user: 'Guille', dateIn: new Date('2020-04-04'), dateOut: new Date('2020-06-25') },
        { id: 101, user: 'Xavi',  dateIn: new Date('2021-04-01'), dateOut: new Date('2021-04-24') },
        { id: 102, user: 'Vicens', dateIn: new Date('2022-04-02'), dateOut: new Date('2022-05-24') },
        { id: 103, user: 'Pepe', dateIn: new Date('2023-04-03'), dateOut: new Date('2023-06-25') },
    ];

    const [reservations, setReservations] = useState(initialReservations);

    const sortedReservations = useMemo(() => {
        //console.log('sorting reservations', reservations);
        const sorted = [...reservations].sort((a, b) => a.dateIn - b.dateOut);
        return sorted;
    }, [reservations]);
    

    const addReservation = (newReservation) => {
        //console.log('addReservation: ', reservation);
        
        const isDateOk = checkDates(newReservation.dateIn, newReservation.dateOut);
        //console.log('isDateOk: ', isDateOk);
        if (isDateOk) {
            setReservations([...reservations, newReservation]);
        }
    };



    const checkDates = (dateIn, dateOut) => { 
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const start = new Date(dateIn);
        const end = new Date(dateOut);

        if (isNaN(start) || isNaN(end)) return false; // Verifica si las fechas son válidas

        return start >= now && start < end; // La fecha de entrada debe ser hoy o futura, y menor que la salida
    }


    const deleteReservation = (id) => {
        let copy = [...reservations];

        // Verifica si el item ya existe
        let itemIndex = copy.findIndex((reservation) => reservation.id === id);
        
        // Si el item existe lo elimina
        if (itemIndex !== -1) {
            copy.splice(itemIndex, 1);
        }
        setReservations(copy);
    };



    return (
        <ReservationContext.Provider value={{ reservations: sortedReservations, addReservation, deleteReservation }}>
            {children}
        </ReservationContext.Provider>
    );
}


ReservationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};