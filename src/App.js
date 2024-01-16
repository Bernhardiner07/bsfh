import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Navbar/Navbar';

import Home from './Home/Home';
import Stundenplaene from './Stundenplaene/Stundenplaene';
import Notiz from './Notiz/Notiz';




function App() {



  return (
    <div className="App">
      <Router>
        <Routes>

          <Route
            path="/"
            element={
              <>
              <Navbar />
                <Home />
              </>
            }
          />

<Route
            path="/stundenplaene"
            element={
              <>
              <Navbar />
                < Stundenplaene />
              </>
            }
          />


<Route
            path="/notiz"
            element={
              <>
              <Navbar />
                < Notiz />
              </>
            }
          />


        
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;


