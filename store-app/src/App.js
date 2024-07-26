import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import {default as Contact} from './components/Contact';
import {default as Artisans} from './components/Artisans';
import {default as Events} from './components/Events';

export default function App() {
  return (
    <Router >
        <main>
      <nav>
        <h1><center>The Country Christmas Store</center></h1>        
        <div id="outer-wrapper">
          <div id="wrapper">
            <table id=".center-me">
              <tr>
                <td width="40px"><Link to="/">Home</Link></td>
                <td width="40px"><Link to="/artisans">Artisans</Link></td>
                <td width="40px"><Link to="/contact">Contact</Link></td>
                <td width="40px"><Link to="/events">Events</Link></td>
              </tr>
            </table>
          </div>
        </div>
        </nav>
     </main>
     <Routes>
       <Route path="/artisans" element={<Artisans />} />
       <Route path="/contact" element={<Contact />} />        
       <Route path="/events" element={<Events />} />        
     </Routes>
   </Router>
);
}
