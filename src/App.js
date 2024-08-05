import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepagecomponent from "./compoents/Homepagecomponent";
import RegisterUser from "./compoents/RegisterUser";
import AdminDashboard from "./compoents/AdminDashboard";
import LoginPage from './compoents/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepagecomponent />} />
          <Route path="/home" element={<Homepagecomponent />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/logincomponent" element={<LoginPage />} />
          {/* <Route exact={true} path="/">
              < />
            </Route> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
