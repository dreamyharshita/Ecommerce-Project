import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import AboutPage from './components/RoutedPages/AboutPage';
import HomePage from './components/RoutedPages/HomePage';
import ContactPage from './components/RoutedPages/ContactPage';
import './index.css';
import Album from './components/RoutedPages/Album';
import App from './App';

/*
React Bootstrap Configuration
*/

import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/RoutedPages/LoginPage';
import CartProvider from './store/CartProvider';


const router= createBrowserRouter([
   {path:'/',element:<LoginPage/>},
   {path:'/login/null',element:<LoginPage/>},
   {path:'/about',element:<AboutPage></AboutPage>},
   {path:'/home',element:<HomePage></HomePage>},
   {path:'/contact',element:<ContactPage></ContactPage>},
   {path:'product-details/:pid',element:<Album/>},
{path:'/login/:pid',element:<App/>}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CartProvider>
<RouterProvider router={router}/>
</CartProvider>
);

