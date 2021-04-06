import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import HomePage from './homePage/HomePage';
import AboutPage from './about/AboutPage';
import ExperiencePage from './experience/ExperiencePage';
import NavbarComponent from '../common/NavbarComponent';
import InterestsPage from './interests/InterestsPage';
import SkillsPage from './skills/SkillsPage';
import EducationPage from './education/EducationPage';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/About" component={AboutPage}/>
        <Route path="/Experience" component={ExperiencePage}/>
        <Route path="/Education" component={EducationPage}/>
        <Route path="/Skills" component={SkillsPage}/>
        <Route path="/Interests" component={InterestsPage}/>
      </Switch>
    </div>
  );
}

export default App;
