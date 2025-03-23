export function checkDates(dateIn, dateOut) {
    
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    const start = new Date(dateIn)
    const end = new Date(dateOut)

    if (isNaN(start) || isNaN(end)) return false // Verifica si las fechas son válidas

    return start >= now && start < end // La fecha de entrada debe ser hoy o futura, y menor que la salida
}
