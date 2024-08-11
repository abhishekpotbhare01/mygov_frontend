import "./App.css";
import Homepagecomponent from "./compoents/Homepagecomponent";
import RegisterUser from "./compoents/RegisterUser";
import AdminDashboard from "./compoents/AdminDashboard";
import LoginPage from "./compoents/LoginPage";
import SchemePage from "./SchemePage";
import AboutUs from "./compoents/AboutUs";
import ContactUs from "./compoents/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNewScheme from "./compoents/AddNewScheme";
import FarmerSchemeRegistration from "./compoents/FarmerSchemeRegistration";
import StudentSchemeForm from "./compoents/Forms/StudentSchemeForm";
import WomenSchemeForm from "./compoents/Forms/WomenSchemeForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Addnewscheme" element={<AddNewScheme></AddNewScheme>} />
          <Route path="/" element={<Homepagecomponent />} />
          <Route path="/home" element={<Homepagecomponent />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin-login" element={<LoginPage name="Admin" />} />
          <Route path="/user-login" element={<LoginPage />} />
          <Route path="/schemepage" element={<SchemePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/schemepage/student-scheme-form"
            element={<StudentSchemeForm />}
          />
{/* 
          <Route
            path="/schemepage/farmer-scheme-form"
            element={< />}
          /> */}

          <Route
            path="/schemepage/women-scheme-form"
            element={< WomenSchemeForm/>}
          />

         
          {/* <Route exact={true} path="/">
              < />
            </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
