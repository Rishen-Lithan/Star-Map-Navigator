import './App.css';
import Apod from './Screens/Apod';
import MarsRoverPhotos from './Screens/MarsRoverPhotos';
import Home from './Screens/Home';
import ContactUs from './Screens/ContactUs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Apod" element={<Apod />} />
      <Route path="/Mars" element={<MarsRoverPhotos />} />
      <Route path="/Contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
