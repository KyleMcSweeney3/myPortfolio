import './App.css';
import Hero from './components/sections/Hero';
import Navbar from './components/Navbar';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Footer from './components/Footer';
import styled from 'styled-components';
import GlobalStyle from './globalstyles';
import Projects from './components/sections/Projects';
import Social from './components/Social';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  return (
    <>  
        <GlobalStyle />
        <Navbar />
        <Social />
        <StyledMainContainer className="fillHeight">
        <Router>
          <Routes>
            <Route exact path="/" element={<><Hero /><About /><Experience /><Projects /><Contact /></>}/>
            <Route exact path="/test" element={<Hero />}/>
          </Routes>
        </Router>
        <Footer />  
      </StyledMainContainer>
    </>
  )
}

export default App;
