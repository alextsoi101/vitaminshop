import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AdminRouter = () => {
  
  return (
    <Routes>
      <Route path='/admin' element={<HomePage/>} />
    </Routes>
  );
};

export default AdminRouter;