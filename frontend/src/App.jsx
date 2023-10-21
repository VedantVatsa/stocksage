import { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/HomePage/Navbar';
import Load from './components/PageLoad/Load';
import DashBoardPage from './components/DashBoard/DashBoardPage';
import './App.css'
import Home from './components/HomePage/Home';
import Register from './components/LoginPage/Register'; // Adjust the path as needed
import Login from './components/LoginPage/Login';
import About from './components/HomePage/About';
import  Nav from './components/HomePage/Nav';
function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {Loading ? (
            <Route exact path="/" element={<Load />} />
          ) : (
            <>
              <Route exact path="/" element={<><Navbar /><Home /></>} />
              <Route exact path="/dashboard" element={<><DashBoardPage /></>} />
              <Route exact path="/about" element={<><Navbar /><About /></>} />
              <Route exact path="/register" element={<><Navbar /><Register /></>} />
              <Route exact path="/login" element={<><Navbar /><Login /></>} /> {/* Add this line for the /login route */}
            </>
          )}
        </Routes>
      </Router>
    </>
  )
}

export default App;
