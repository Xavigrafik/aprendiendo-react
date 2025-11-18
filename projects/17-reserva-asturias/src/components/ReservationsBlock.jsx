import { useContext, useState, useMemo } from 'react'
import ReservationLine from '../components/ReservationLine'
import { ReservationContext } from '../contexts/ReservationContext'
import { UserContext } from '../contexts/UserContext'

const ReservationsBlock = () => {
    // 1. Hook de estado para controlar el filtro
    const [isFilteredByUser, setIsFilteredByUser] = useState(false) 
    
    // 2. Extracción de contexto
    const { reservations } = useContext(ReservationContext)
    const { user } = useContext(UserContext)

    // 3. Lógica de filtrado utilizando el principio de comparación por Nombre
    const filteredReservations = useMemo(() => {
        // Si no está filtrado O no hay usuario logueado O no hay nombre, devuelve todo.
        if (!isFilteredByUser || !user?.name) { 
            return reservations
        }
        
        // **FILTRO POR NOMBRE (Como en isOwner):**
        // Compara user.name con la propiedad de nombre del usuario en la reserva (asumida como reservation.user)
        return reservations.filter(reservation => user.name === reservation.user)
        
    }, [reservations, isFilteredByUser, user]) // Dependencia: el array completo, el toggle y el objeto user


    // 4. Handler para el botón
    const handleFilterToggle = () => {
        // Simplemente invierte el estado actual del filtro
        setIsFilteredByUser(prev => !prev) 
    }

    // 5. Renderizado
    return (
        <>
            <ul className="reservationList">
                {!filteredReservations.length && <p>No hay fechas reservadas.</p>}

                {/* Encabezado fijo */}
                <li className={`reservationLine header`}>
                    <div className="info">
                        <span className='id'>id</span>
                        <span className='user'>User</span>
                        <span className='date'>Date in</span>
                        <span className='date'>Date out</span>
                        <span className='status'> Status</span>
                    </div>
                </li>

                {filteredReservations.map((reservation) => (
                    <ReservationLine
                        key={reservation.id}
                        reservation={reservation}
                    />
                ))}
            </ul>
                
            <div className="row">
                <div className="col">
                    <button 
                        id="filterReservations" 
                        onClick={handleFilterToggle} 
                        // Deshabilitar si no hay un nombre de usuario disponible para filtrar
                        disabled={!user?.name} 
                    >
                        {isFilteredByUser ? (
                            <span className="material-symbols-sharp"> toggle_on </span>
                        ) : (
                            <span className="material-symbols-sharp"> toggle_off </span>
                        )}
                        <div>{isFilteredByUser ? 'Showing MY reservations' : 'Show ALL reservations'}</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ReservationsBlock