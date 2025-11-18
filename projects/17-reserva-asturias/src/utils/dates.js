// utils.js
export function formatDate(date, style=null) {
    if (!(date instanceof Date)) {
        return 'Fecha inválida'; // Manejo de errores
    }

    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const year = date.getFullYear();

    if (style === 'long') {
        return date.toLocaleString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    if (style === 'abrv') {
        return date.toLocaleString('es-ES', {
            year: '2-digit',
            month: 'short',
            day: 'numeric',
        });
    }

    if (style === 'short') {
        return date.toLocaleString('es-ES', {
            month: 'short',
            day: 'numeric',
        });
    }

    
    if (style === 'slash') {
        return `${day}/${month}/${year}`;
    }

    
    return `${day}-${month}-${year}`;

}


/**
 * Devuelve un objeto Date que representa la fecha y hora actual.
 *
 * @returns {Date} La instancia de Date para el momento presente.
 */
export function getToday() { 
    return new Date();
}
