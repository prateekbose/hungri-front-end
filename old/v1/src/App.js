import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './components/nav'
import HeroSection from './components/hero'
import Donatefood from './components/donatefood/donatefood'
import DonateWaste from "./components/WasteDonate/donatewaste";

function App() {
  return ([
    <NavBar/>,
    <Router>
      <Route exact path='/' component={HeroSection} />
      <Route exact path='/donate' component={Donatefood} />
      <Route exact path='/waste' component={DonateWaste} />
    </Router>
  ]);
}


export default App;
