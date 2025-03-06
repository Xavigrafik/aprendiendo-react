import { createContext, useState, useMemo  } from "react";

// 1. Crear el contexto
export const ReservationContext = createContext();

// 2. Proveedor del contexto
export function ReservationProvider({ children }) {

    const initialReservations = [
        { id: 4, user: 'Guille 2', dateIn: '04/04/2020', dateOut: '25/06/2024' },
        { id: 1, user: 'Xavier', dateIn: '01/04/2020', dateOut: '24/04/2021' },
        { id: 2, user: 'Vicens', dateIn: '02/04/2020', dateOut: '24/05/2022' },
        { id: 3, user: 'Guille', dateIn: '03/04/2020', dateOut: '25/06/2023' },
    ]

    const [reservations, setReservations] = useState(initialReservations);
    
    // ⚡ Siempre ordena cuando haya cambios en `reservations`
       const sortedReservations = useMemo(() => {
        return [...reservations].sort((a, b) => new Date(a.dateIn) - new Date(b.dateIn));
       }, [reservations]);
    



    // 3. Función para añadir una reserva
    const addReservation = (newReservation) => {
        setReservations([...reservations, newReservation]);
    };

    return (
        <ReservationContext.Provider value={{ reservations: sortedReservations, addReservation }}>
            {children}
        </ReservationContext.Provider>
    );
}
