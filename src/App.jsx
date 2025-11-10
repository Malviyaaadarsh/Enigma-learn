import React from 'react'
import "/src/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx'
import Home from './components/Home/Home.jsx'
import Courses from './components/Courses/Courses.jsx'
import Shorts from './components/Shorts/Shorts.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contribute from './components/Contribute/Contribute.jsx';
import { MeshGradient } from 'css-mesh';

const App = () => {
  return (

    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Shorts' element={<Shorts />} />
          <Route path='/Contribute' element={<Contribute />} />
        </Routes>
        <Footer/>
      </div>
    </Router>

  )
}














export default App
