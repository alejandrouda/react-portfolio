import './App.css';
import LandingPage from './sections/LandingPage/LandingPage'
import AboutMe from './sections/AboutMe/AboutMe'
import TechnicalStack from './sections/TechnicalStack/TechnicalStack'
// import Features from './sections/Features/Features'
import Portfolio from './sections/Portfolio/Portfolio'
import ContactForm from './sections/ContactForm/ContactForm'
import Footer from './sections/Footer/Footer'

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutMe />
      <TechnicalStack />
      {/* <Features /> */}
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
