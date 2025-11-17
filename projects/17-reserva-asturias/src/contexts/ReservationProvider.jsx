import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import { ReservationContext } from './ReservationContext';

// Función auxiliar para normalizar fechas al inicio del día (medianoche)
// Es esencial para hacer comparaciones precisas (Date objects comparan hora también).
const normalizeDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
};

export const ReservationProvider = ({ children }) => {

    const initialReservations = [
        { id: 100, user: 'Guille', dateIn: new Date('2025-01-04'), dateOut: new Date('2025-01-08') }, 
        { id: 101, user: 'Xavi',   dateIn: new Date('2025-02-01'), dateOut: new Date('2025-02-05') },
        { id: 102, user: 'Ricardo', dateIn: new Date('2026-03-02'), dateOut: new Date('2026-03-06') },
        { id: 103, user: 'Ricardo',   dateIn: new Date('2026-04-03'), dateOut: new Date('2026-04-07') },
        { id: 104, user: 'Xavi',   dateIn: new Date('2026-05-01'), dateOut: new Date('2026-05-05') },
        { id: 105, user: 'Xavi',   dateIn: new Date('2025-11-16'), dateOut: new Date('2025-11-18') },
    ];

    const [reservations, setReservations] = useState(initialReservations);

    const startingDate = useMemo(() => new Date(), []);
    
    // 🟢 NUEVO: Estado calculado (clasificación) y ordenación en un solo useMemo
    const classifiedReservations = useMemo(() => {
        const todayNormalized = normalizeDate(startingDate);
        
        const classified = reservations.map(reservation => {
            const dateInNormalized = normalizeDate(reservation.dateIn);
            const dateOutNormalized = normalizeDate(reservation.dateOut);

            let status = 'futuro'; // Por defecto

            // Si la fecha de salida es estrictamente menor que la de hoy, es pasado.
            if (dateOutNormalized < todayNormalized) {
                status = 'pasado';
            } 
            // Si la fecha de entrada es menor o igual a hoy Y la fecha de salida es mayor o igual a hoy, es presente.
            else if (dateInNormalized <= todayNormalized && dateOutNormalized >= todayNormalized) {
                status = 'current';
            } 
            // Si no es pasado ni presente, es futuro (dateInNormalized > todayNormalized)
            else {
                status = 'futuro';
            }
            
            return {
                ...reservation,
                status: status // Añadimos la propiedad de clasificación
            };
        });

        // Ordenamos las reservas (manteniendo la lógica de ordenación por fecha de entrada)
        const sorted = classified.sort((a, b) => a.dateIn - b.dateIn);
        return sorted;

    }, [reservations, startingDate]); // Dependencias: solo cambia si cambian las reservas o la fecha de hoy
    

    const addReservation = (newReservation) => {
        setReservations([...reservations, newReservation]);
        console.log('reserva añadida!', newReservation);
    };

    const deleteReservation = (id) => {
        let copy = [...reservations];

        let itemIndex = copy.findIndex((reservation) => reservation.id === id);
        
        if (itemIndex !== -1) {
            copy.splice(itemIndex, 1);
        }
        setReservations(copy);
    };

    const modifyReservation = (id, newDateIn, newDateOut) => {
            setReservations(prevReservations => {
                const itemIndex = prevReservations.findIndex(reservation => reservation.id === id);
                
                if (itemIndex === -1) {
                    return prevReservations;
                }
                
                const newReservations = [...prevReservations];

                newReservations[itemIndex] = {
                    ...newReservations[itemIndex],
                    dateIn: newDateIn,
                    dateOut: newDateOut,
                };
                
                console.log(`Reserva ${id} modificada: ${newDateIn.toDateString()} a ${newDateOut.toDateString()}`);
                return newReservations;
            });
    };


    // 🟢 EXPORTAMOS EL NUEVO ESTADO CALCULADO
    return (
        <ReservationContext.Provider value={{ reservations: classifiedReservations, startingDate, addReservation, deleteReservation, modifyReservation }}>
            {children}
        </ReservationContext.Provider>
    );
}


ReservationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};