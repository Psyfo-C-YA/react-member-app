import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddItem from './components/AddItem.jsx';
import EditItem from './components/EditItem.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/add',
    element: <AddItem />,
  },
  {
    path: '/edit/:id',
    element: <EditItem />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
