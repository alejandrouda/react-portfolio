
import "./NameDescription.css"
import PrimaryButton from "../UI/Buttons/PrimaryButton/PrimaryButton"

function NameDescription(props) {
  return (
    <div class="name-block">
      <h1>Alejandro Udaquiola</h1>
      <h4>Ruby On Rails | Algolia | Shopify theme development</h4>
      <div class="separate"></div>
      <p>Full-stack developer based in Spain</p>
      <PrimaryButton />
    </div>
  )
}
export default NameDescription
