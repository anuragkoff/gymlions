import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection/Hero';
import Test from './components/Testimonials/Test';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Home from './Home';
import Service from './components/Services/Service';
import Pricing from './components/priceSection/Pricing';
import Contact from './components/Contact/Contact';
import Login from './components/LoginPage/Login';
import Signup from './components/LoginPage/Signup';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}

      <Router> 
      <Navbar/> 
      {/* <Hero/>
      <Test/>
      <Footer/>  */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>

          <Route path="/about" element={<About/>} >
          </Route>

          <Route path="/services" element={<Service/>} >
          </Route>

          <Route path="/pricing" element={<Pricing />} >
          </Route>

          <Route path="/contact" element={<Contact />} >
          </Route>

          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>

        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
