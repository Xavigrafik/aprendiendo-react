import { useContext } from 'react'

import { ModalContext } from "../contexts/ModalContext";

const MyModal = () => {
    
    const { isModalOpen, closeModal, modalContent } = useContext(ModalContext);

    if (!isModalOpen) return null // No renderizar si no está abierto
    
    console.log('MyModal renderizado'); // Verifica si se renderiza múltiples veces


    return (
        <div
            className={`modal fade show d-block ${ 'modal-' + (modalContent?.size ? modalContent?.size : 'xl') }`}
            style={{ display: 'block' }}
            tabIndex="-1"
            aria-labelledby="modalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalLabel">
                            {modalContent?.title || 'Modal'}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={closeModal}
                        ></button>
                    </div>
                    <div className="modal-body text-center">{modalContent?.body}</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        {modalContent?.footer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyModal
