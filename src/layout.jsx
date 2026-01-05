import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';


function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    
    
    </>
  )
}

export default Layout