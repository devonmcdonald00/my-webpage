import React from 'react'
import './App.css';
import Intro from './Intro'
import AppBar from './AppBar'
import AboutMe from './AboutMe';
import ProjectGallery from './ProjectGallery';
import Resume from './Resume';
import ContactInfo from './ContactInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/project-gallery'>
            <AppBar/>
            <ProjectGallery/>
          </Route>
          <Route path='/resume'>
            <AppBar/>
            <Resume/>
          </Route>
          <Route path='/contact-information'>
            <div>
              <AppBar/>
              <ContactInfo/>
            </div>
          </Route>
          <Route path='/'>
            <div>
              <Intro/>
              <AppBar/>
              <AboutMe/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
