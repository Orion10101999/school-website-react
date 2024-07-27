import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Academics from './components/academics/Academics'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutus/AboutUs';
import Admission from './components/admission/Admission';
import Faculty from './components/faculty/Faculty';
import Students from './components/student/Student';
import Gallery from './components/gallery/Gallery';
import ContactUs from './components/contactus/ContactUs';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <div>
      <Router>
        <Layout/>
      <Routes>
    <Route path='/' element={<Admission/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/academics" element={<Academics/>} />
    <Route path="/faculty" element={<Faculty/>} />
    <Route path="/students" element={<Students/>} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/contactus" element={<ContactUs/>} />
    
  </Routes>
</Router>
    </div>
  )
}

export default App
