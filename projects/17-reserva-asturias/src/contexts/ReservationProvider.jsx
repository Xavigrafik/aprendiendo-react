import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import { ReservationContext } from './ReservationContext';



export const ReservationProvider = ({ children }) => {

    const initialReservations = [
        { id: 100, user: 'Guille', dateIn: new Date('2026-01-04'), dateOut: new Date('2026-01-08') }, // 4 días, Enero
        { id: 101, user: 'Xavi',   dateIn: new Date('2026-02-01'), dateOut: new Date('2026-02-05') }, // 4 días, Febrero
        { id: 102, user: 'Ricardo', dateIn: new Date('2026-03-02'), dateOut: new Date('2026-03-06') }, // 4 días, Marzo
        { id: 103, user: 'Ricardo',   dateIn: new Date('2026-04-03'), dateOut: new Date('2026-04-07') }, // 4 días, Abril
        { id: 104, user: 'Xavi',   dateIn: new Date('2026-05-01'), dateOut: new Date('2026-05-05') }, // 4 días, Mayo
    ];

    const [reservations, setReservations] = useState(initialReservations);

    const sortedReservations = useMemo(() => {
        //console.log('sorting reservations', reservations);
        const sorted = [...reservations].sort((a, b) => a.dateIn - b.dateIn);
        return sorted;
    }, [reservations]);
    

    const addReservation = (newReservation) => {
        setReservations([...reservations, newReservation]);
        console.log('reserva añadida!', newReservation);
    };

    const startingDate = useMemo(() => new Date(), []);

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

    const modifyReservation = (id, newDateIn, newDateOut) => {
            setReservations(prevReservations => {
                const itemIndex = prevReservations.findIndex(reservation => reservation.id === id);
                
                if (itemIndex === -1) {
                    return prevReservations; // No se encontró, retorna el array sin cambios
                }
                
                // Creamos una copia del array
                const newReservations = [...prevReservations];

                // Actualizamos la reserva específica
                newReservations[itemIndex] = {
                    ...newReservations[itemIndex],
                    dateIn: newDateIn,
                    dateOut: newDateOut,
                };
                
                console.log(`Reserva ${id} modificada: ${newDateIn.toDateString()} a ${newDateOut.toDateString()}`);
                return newReservations;
            });
    };



    return (
        <ReservationContext.Provider value={{ reservations: sortedReservations,startingDate, addReservation, deleteReservation, modifyReservation }}>
            {children}
        </ReservationContext.Provider>
    );
}


ReservationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};