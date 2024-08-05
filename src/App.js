import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepagecomponent from './compoents/Homepagecomponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './compoents/LoginPage';
import SchemePage from './SchemePage';
import ContactUs from './compoents/ContactUs';
import AboutUs from './compoents/AboutUs';

function App() {
  const Admin ="Admin";  //pass to admin login form
  return (
    <div className="App">
      
       <Router>
      <Routes>
         <Route path="/" element={<Homepagecomponent />} />
            <Route path="/userlogin" element={<LoginPage/>}>
            </Route>
            <Route path="/Adminlogin" element={<LoginPage name={Admin}/>}>
            </Route>
            <Route path="/AboutUs" element={<AboutUs/>}>
            </Route>
            <Route path="/ContactUs" element={<ContactUs/>}>
            </Route>
            </Routes>
            </Router>
    </div>
  );
}

export default App;
