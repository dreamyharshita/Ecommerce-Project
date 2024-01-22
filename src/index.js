import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AboutPage from './components/RoutedPages/AboutPage';
import './index.css';
import App from './App';

/*
React Bootstrap Configuration
*/

import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const router= createBrowserRouter([
   {path:'/',element:<App/>},
   {path:'/about',element:<AboutPage></AboutPage>}
   
  
    ]);
  



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<RouterProvider router={router}/>
);

