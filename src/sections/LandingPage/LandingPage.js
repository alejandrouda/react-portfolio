import './LandingPage.css'
import NavbarComponent from '../../components/UI/Navbar/NavbarComponent'

function LandingPage(props) {
  return (
    <div className="landing-page">
      <NavbarComponent></NavbarComponent>
      <h2>Landing page</h2>
    </div>
  )
}

export default LandingPage