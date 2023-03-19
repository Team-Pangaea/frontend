import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {Explore} from "src/routes/Explore";
import {Root} from "src/Root";
import {Circle} from "src/routes/Circle";
import {toast, ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {CircleOverview} from "src/routes/Circle/Overview";
import {CircleMyContributions} from "src/routes/Circle/MyContributions";
import {CircleProjects} from "src/routes/Circle/Projects";
import {CircleTasks} from "src/routes/Circle/Tasks";
import {CircleAllocate} from "src/routes/Circle/Allocate";
import {CircleUserAllocate} from "src/routes/Circle/UserAllocate";
import {ErrorPage} from "src/routes/App/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
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
                element: <Circle />,
                children: [
                    {
                        index: true,
                        element: <Navigate to={"/circle/overview"} />
                    },
                    {
                        path: "overview",
                        element: <CircleOverview />
                    },
                    {
                        path: "my-contributions",
                        element: <CircleMyContributions />
                    },
                    {
                        path: "overview/projects",
                        element: <CircleProjects />
                    },
                    {
                        path: "overview/tasks",
                        element: <CircleTasks />
                    },
                    {
                        path: "overview/projects/:projectName",
                        element: <CircleTasks />
                    },
                    {
                        path: "my-contributions/allocate",
                        element: <CircleAllocate />
                    },
                    {
                        path: "my-contributions/allocate/:username",
                        element: <CircleUserAllocate />
                    }
                ]
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
      <ToastContainer 
        position={toast.POSITION.BOTTOM_LEFT}
      />
      <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
