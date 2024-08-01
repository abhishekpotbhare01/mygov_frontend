import logo from './logo.svg';
import './App.css';
import Homepagecomponent from './compoents/Homepagecomponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
         <Route path="/" element={<Homepagecomponent />} />
            {/* <Route exact={true} path="/">
              < />
            </Route> */}
            </Routes>
            </Router>
    </div>
  );
}

export default App;
