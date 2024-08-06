import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepagecomponent from './compoents/Homepagecomponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterUser from "./compoents/RegisterUser";
import AdminDashboard from "./compoents/AdminDashboard";
import LoginPage from './compoents/LoginPage';
import ContactUs from './compoents/ContactUs';
import AboutUs from './compoents/AboutUs';

function App() {
  const Admin = "Admin";
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepagecomponent />} />
          <Route path="/home" element={<Homepagecomponent />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin-login" element={<LoginPage name={Admin} />}></Route>
          <Route path="/user-login" element={<LoginPage  />}></Route>
          <Route path="/logincomponent" element={<LoginPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* <Route exact={true} path="/">
              < />ō̥
            </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
