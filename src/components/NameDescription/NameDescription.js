
import "./NameDescription.css"
import PrimaryButton from "../UI/Buttons/PrimaryButton/PrimaryButton"

function NameDescription(props) {
  return (
    <div class="name-block">
      <h1>Alejandro Udaquiola</h1>
      <h4>Full-stack Ruby On Rails developer</h4>
      <div class="separate"></div>
      <p>Shopify Theme development & API integrations</p>
      <PrimaryButton />
    </div>
  )
}
export default NameDescription
