import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Home from "./components/Home/Home";
import GetStarted from "./components/GetStarted/GetStarted";
import StackI from "./components/DS/Stack/StackI";
import StackM from "./components/DS/Stack/StackM";
import About from './components/About/About';
import StackC from './components/DS/Stack/StackC';
import StackP from './components/DS/Stack/StackP';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/get-started',
        element: <GetStarted />,
  
      },
      {
        path: '/stack-intro',
        element: <StackI />
      },
      {
        path: '/stack-methods',
        element: <StackM />
      },
      {
        path: '/stack-code',
        element: <StackC />
      },
      {
        path: '/stack-problem',
        element: <StackP />
      }
       
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
