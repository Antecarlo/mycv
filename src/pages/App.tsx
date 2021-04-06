import './App.css';
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
      <AboutPage></AboutPage>
      <ExperiencePage></ExperiencePage>
      <EducationPage></EducationPage>
      <SkillsPage></SkillsPage>
      <InterestsPage></InterestsPage>
    </div>
  );
}

export default App;
