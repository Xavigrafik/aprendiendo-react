import { createContext, useState, useMemo  } from "react";

// 1. Crear el contexto
export const ReservationContext = createContext();

// 2. Proveedor del contexto
export function ReservationProvider({ children }) {

    const initialReservations = [
        { id: 100, user: 'Guille', dateIn: '04/04/2020', dateOut: '25/06/2024' },
        { id: 101, user: 'Xavi',   dateIn: '01/04/2020', dateOut: '24/04/2021' },
        { id: 102, user: 'Vicens', dateIn: '02/04/2020', dateOut: '24/05/2022' },
        { id: 103, user: 'Guille', dateIn: '03/04/2020', dateOut: '25/06/2023' },
    ]

    const [reservations, setReservations] = useState(initialReservations);
    
    // ORDENA por dateIn cuando haya cambios en `reservations`
       const sortedReservations = useMemo(() => {
        return [...reservations].sort((a, b) => new Date(a.dateIn) - new Date(b.dateIn));
       }, [reservations]);
    


    const addReservation = (newReservation) => {
        setReservations([...reservations, newReservation]);
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

    return (
        <ReservationContext.Provider value={{ reservations: sortedReservations, addReservation, deleteReservation }}>
            {children}
        </ReservationContext.Provider>
    );
}
