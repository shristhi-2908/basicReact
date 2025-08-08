import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="ngo_container">
      <Header/>
     <Outlet />
      <Footer/>
  </div>
  )
}

export default App
