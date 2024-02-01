import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import {MOVIES_DATA} from "./Consts";
import { useState } from 'react';
import MovieDetail from './components/MovieDetail';
function App() {
  const [catalog,setCatalog] = useState(MOVIES_DATA);
  
  const STATE_MAP = {
    catalog
  };

  const getCategoryData = (category) => {
    return STATE_MAP[category];
  };
  return (
    
      <Router>
        <nav>
          
          <Link  to={"/"}>
          Home
        </Link>
        </nav>
        <Routes>
           <Route path="/" element={<Landing />} />
           <Route path="/catalog" element={<Catalog getCategoryData={getCategoryData} />} />
           <Route path="/movies/:id" element={<MovieDetail getCategoryData={getCategoryData} />} />
        </Routes>

      </Router>
    
  );
}

export default App;
