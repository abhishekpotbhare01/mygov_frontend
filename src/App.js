import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepagecomponent from './compoents/Homepagecomponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './compoents/LoginPage';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
         <Route path="/" element={<Homepagecomponent />} />
            <Route path="/logincomponent" element={<LoginPage/>}>
            </Route>
            </Routes>
            </Router>
    </div>
  );
}

export default App;
