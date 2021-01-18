import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './components/nav'
import HeroSection from './components/hero'
import Donatefood from './components/donatefood/donatefood'

function App() {
  return ([
    <NavBar/>,
    <Router>
      <Route exact path='/' component={HeroSection} />
      <Route exact path='/donate' component={Donatefood} />
    </Router>
  ]);
}


export default App;
