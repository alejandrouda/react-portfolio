import './App.css';
import LandingPage from './sections/LandingPage/LandingPage'
import AboutMe from './sections/AboutMe/AboutMe'
import TechnicalStack from './sections/TechnicalStack/TechnicalStack'
import Features from './sections/Features/Features'
import Portfolio from './sections/Portfolio/Portfolio'
import Footer from './sections/Footer/Footer'

function App() {
  return (
    <div className="App">
      <LandingPage></LandingPage>
      <AboutMe></AboutMe>
      <TechnicalStack></TechnicalStack>
      <Features></Features>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
