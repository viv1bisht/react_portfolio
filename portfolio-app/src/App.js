import './App.css';
import styled, { ThemeProvider }  from 'styled-components'
import {darkTheme} from "./utils/Themes"
import  NavBar from "./components/NavBar"
import Hero from './components/HeroSection';
// import StarCanvas from "./components/canvas/Star";
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Project from './components/Project';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

const Body =styled.div`
background-color:${({theme})=> theme.bg};
width :100%;
height :100%;
overflow-x :hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
  `

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
    <NavBar/>
      <Body>
      {/* <StarCanvas/> */}
      <Hero/>
      <Wrapper>
      <Skills/>
      <Experience/>
      </Wrapper>
      <Project/>
      <Wrapper>
        <Education/>
        {/* <Contact/> */}
      </Wrapper>
      {/* <Footer/> */}
      </Body>
    </Router>
    </ThemeProvider>
  );
}

export default App;
