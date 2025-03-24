import PropTypes from 'prop-types'
import { useState } from 'react'
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (content) => {
        setModalContent(content)
        setIsModalOpen(true)
        console.log('Modal abierto:', content)
    }

    const closeModal = () => {
        setModalContent(null)
        setIsModalOpen(false)
        console.log('Modal cerrado')
    }

    const contextValue = {
        modalContent,
        isModalOpen,
        openModal,
        closeModal,
    }

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    )
}

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
}