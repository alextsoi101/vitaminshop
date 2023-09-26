import React, { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useSelector, useDispatch } from 'react-redux';
import { closeErrorSnackbar } from '../../../store/modalSlice';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AdminErrorSnackbar = () => {

  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isErrorSnackbarOpen);
  const snackbarError = useSelector(state => state.modal.errorSnackbarMessage);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeErrorSnackbar())
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={2500} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {snackbarError}
      </Alert>
    </Snackbar>
  );
}

export default AdminErrorSnackbar; 