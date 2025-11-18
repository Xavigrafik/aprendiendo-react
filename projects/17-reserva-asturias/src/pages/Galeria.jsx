import { useState } from 'react';
import { formatDate, getToday } from '../utils/dates';

function Galeria() {
      
    const currentDate =  getToday();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Galeria</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className='alert alert-info mt-3'>
                            <h4>FormatDate:</h4>
                            <p>Default: <strong>{formatDate(currentDate)}</strong></p>
                            <p>kebap:   <strong>{formatDate(currentDate, 'kebap')}</strong></p>
                            <p>slash:   <strong>{formatDate(currentDate, 'slash')}</strong></p>
                            <p>abrv:    <strong>{formatDate(currentDate, 'abrv')}</strong></p>
                            <p>short:   <strong>{formatDate(currentDate, 'short')}</strong></p>
                            <p>long:    <strong>{formatDate(currentDate, 'long')}</strong></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Galeria;
