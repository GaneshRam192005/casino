import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Members';
import reportWebVitals from './reportWebVitals';
import Collab from './Collab';
import Browse from './Browse';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recharge from './Recharge';
import Level from './Level';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  

  },
  {
    path: "/collab",
    element: <Collab />,  
  },
  {
    path: "/app",
    element: <App />,  

  },
  {
    path: "/browse",
    element: <Browse />,  

  },
  {
    path: "/recharge",
    element: <Recharge />, 

  },
  {
    path: "/level",
    element: <Level />, 

  },
 

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


