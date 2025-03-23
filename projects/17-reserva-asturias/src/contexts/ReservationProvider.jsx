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
        setReservations([...reservations, newReservation]);
        console.log('reserva añadida!', newReservation);
    };



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

    const modifyReservation = (id) => {
        let copy = [...reservations];

        // Verifica si el item ya existe
        let itemIndex = copy.findIndex((reservation) => reservation.id === id);
        
        // Si el item existe 
        if (itemIndex !== -1) {
            alert('inserta nuevas fechas')
        }
        setReservations(copy);
    };



    return (
        <ReservationContext.Provider value={{ reservations: sortedReservations, addReservation, deleteReservation, modifyReservation }}>
            {children}
        </ReservationContext.Provider>
    );
}


ReservationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};