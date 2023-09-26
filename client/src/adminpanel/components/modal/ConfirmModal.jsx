import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useSelector, useDispatch } from 'react-redux';
import { openAdminModal, closeAdminModal } from '../../../store/modalSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const ConfirmModal = (props) => {

  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modal.isAdminModalOpen);
  const adminModalText = useSelector(state => state.modal.adminModalText);
  const confirmCallback = useSelector(state => state.modal.adminModalCallback);

  const closeModal = () => {
    dispatch(closeAdminModal())
  }

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={props.closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="confirmmodal">
            <div className="modal-header">
              <div className="header-text">
                {adminModalText}
              </div>
              <button 
                className="close-btn"
                onClick={closeModal}
              >
                <CloseRoundedIcon />
              </button>
            </div>
            <div className="modal-text">
              Are you sure?
            </div>
            <div className="modal-buttons">
              <button 
                className="cancel-btn"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button 
                className="confirm-btn"
                onClick={confirmCallback}
              >
                Confirm
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ConfirmModal;
