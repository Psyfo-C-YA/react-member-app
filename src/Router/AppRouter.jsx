// src/AppRouter.js
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import AddItem from '../components/AddItem';
import EditItem from '../components/EditItem';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/add" exact element={AddItem} />
        <Route path="/edit/:id" exact element={EditItem} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
