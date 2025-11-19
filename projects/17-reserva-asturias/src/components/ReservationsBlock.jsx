import { useContext, useState, useMemo, useEffect } from 'react'
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
        
        if (!isFilteredByUser || !user?.name) { 
            return reservations
        }
        
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
            {user && 
                <div className="row">
                    <div className="col">
                        <button id="filterReservations" onClick={handleFilterToggle} >
                            {isFilteredByUser ? (
                                <span className="material-symbols-sharp"> toggle_on </span>
                            ) : (
                                <span className="material-symbols-sharp"> toggle_off </span>
                            )}
                            <div>{!isFilteredByUser ? 'Show MY reservations' : 'Show ALL reservations'}</div>
                        </button>
                    </div>
                </div>
            }

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
                
            

        </>
    )
}

export default ReservationsBlock