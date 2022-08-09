import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss';
import NavbarComponent from './Components/Navbar/NavbarComponent'
// import NavbarComponent from '../Navbar/NavbarComponent'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SoftwareDeveloper from './Components/SoftwareDeveloper/SoftwareDeveloper';


function App() {
  return (
    <div>
      {/* <h1>Reed Creative Werx</h1> */}
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/software-development" element={<SoftwareDeveloper/>}/>
        <Route path="/photography" />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App;
