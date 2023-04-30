import Navbars from "./components/Navbars";
import Intro from "./components/intro/Intro";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects";
import {themeContext} from './Context'
import { useContext } from "react";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer"
function App() {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'rgb(0 0 0)' :  '',
      color:darkMode? 'white' :''
    }}
  
    >
        <p></p>
    <Navbars/>
    
    <Intro/>
    <Skills/>
    <Education/>
    <Projects/>
    
    
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
