import React from "react";
import Modal from 'react-modal';
Modal.setAppElement('#root');

const IncidentModal = ({ modalOpen, setModalOpen, slot_id }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
        overlay: {
            zIndex: '999',
        }
    };
    return (
        <div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={customStyles}>
                <h1>ID: {slot_id}</h1>
            </Modal>
        </div>
    )
}

export default IncidentModal