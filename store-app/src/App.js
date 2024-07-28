import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import {default as Home} from './components/Home';
import {default as Contact} from './components/Contact';
import {default as Artisans} from './components/Artisans';
import {default as Events} from './components/Events';
import title_banner from './img/title_banner_white.png';

export default function App() {
  return (
  <body>
    <Router >
      <div>
        <center><img src={title_banner} alt={'The Country Christmas Store Banner'} /></center>

        <div class="topnav">
          <div class="topnav-centered">
            <Link to="/home">Home</Link>
          </div>

          <Link to="/artisans">Artisans</Link>
          <Link to="/events">Events</Link>

          <div class="topnav-right">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

     <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/artisans" element={<Artisans />} />
       <Route path="/contact" element={<Contact />} />        
       <Route path="/events" element={<Events />} />        
     </Routes>
   </Router>
  </body>   
);
}
