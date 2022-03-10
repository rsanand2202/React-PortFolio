import { useContext } from 'react';
import './App.css';
import Intro from './component/intro/intro';
import About from './component/about/about';
import ProjectList from './component/projectList/projectList';
import Contact from './component/contact/contact'
import Modes from './component/modes/modes';

const App = () => {
  return (
    <div>
      <div className="App">
       
        <Intro/>
        <About/>
        <ProjectList/>
        <Contact/>

        </div>
   
    </div>

    
  );
}

export default App;
