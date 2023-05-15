import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './common/Navbar';
import DreamHouse from './pages/home/DreamHouse';
import SkilledArchitecture from './pages/home/SkilledArchitecture';
import OurQualities from './pages/home/OurQualities';
import Testimonial from './pages/home/Testimonial';
import OurProjects from './pages/home/OurProjects';
import OurTeam from './pages/home/OurTeam';
import Ideas from './pages/home/Ideas';
import ContactUS from './pages/home/ContactUS';
import Footer from './common/Footer';
import PrivacyPolicy from './common/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <DreamHouse />
        <SkilledArchitecture />
        <OurQualities />
        <Testimonial />
        <OurProjects />
        <OurTeam />
        <Ideas />
        <ContactUS />
      </div>
      <Footer />
      <PrivacyPolicy />
    </div>
  );
}

export default App;
