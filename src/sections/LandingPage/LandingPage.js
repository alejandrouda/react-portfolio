import './LandingPage.css'
import NavbarComponent from '../../components/UI/Navbar/NavbarComponent'
import NameDescription from '../../components/NameDescription/NameDescription'

function LandingPage(props) {
  return (
    <section className="landing-page">
      <NavbarComponent></NavbarComponent>
      <NameDescription></NameDescription>
    </section>
  )
}

export default LandingPage