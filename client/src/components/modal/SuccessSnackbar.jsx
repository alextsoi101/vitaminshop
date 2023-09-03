import React, { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useSelector, useDispatch } from 'react-redux';
import { closeSuccessSnackbar } from '../../store/modalSlice';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessSnackbar = () => {

  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isSuccessSnackbarOpen);
  const snackbarMessage = useSelector(state => state.modal.successSnackbarMessage);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeSuccessSnackbar())
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={2500} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
}

export default SuccessSnackbar; 