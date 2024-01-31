import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from './components/Landing';
import Catalog from './components/Catalog';
function App() {
  return (
    
      <Router>
        <nav>
          
          <Link  to={"/"}>
          Home
        </Link>
        </nav>
        <Routes>
           <Route path="/" element={<Landing />} />
           <Route path="/Catalog" element={<Catalog />} />
        </Routes>

      </Router>
    
  );
}

export default App;
