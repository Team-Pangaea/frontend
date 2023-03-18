import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {Explore} from "src/routes/Explore";
import {Root} from "src/Root";
import {Circle} from "src/routes/Circle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/explore",
                element: <Explore />,
            },
            {
                path: "/circle",
                element: <Navigate to={"/circle/overview"} />
            },
            {
                path: "/circle/:activeName/*",
                element: <Circle />
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
