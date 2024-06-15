import './App.css';
import Layout from './Screens/Components/Layout';
import Signup from './Screens/Auth/Signup';
import Apod from './Screens/Components/Apod';
import MarsRoverPhotos from './Screens/Components/MarsRoverPhotos';
import Home from './Screens/Components/Home';
import Login from './Screens/Auth/Login';
import ContactUs from './Screens/Components/ContactUs';
import Unauthorized from './Screens/Components/Unauthorized'
import Missing from './Screens/Components/Missing';
import RequireAuth from './Screens/Components/RequireAuth';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
  "Admin": 5150,
  "User": 2001
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        { /* public routes */}
        <Route path='/' element={<Login />} />
        <Route path='Signup' element={<Signup />} />
        <Route path="Unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path='Home' element={<Home />} />
          <Route path='Apod' element={<Apod />} />
          <Route path='Mars' element={<MarsRoverPhotos />} />
          <Route path='Contact' element={<ContactUs />} />
        </Route>
        
        {/* Missing Routes */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
