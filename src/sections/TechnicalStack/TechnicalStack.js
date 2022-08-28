import './TechnicalStack.css'

function TechnicalStack(props) {
  return (
    <section class="technical-stack">
      <div class="skills-cards">
        <div class="single-card">
          <div className="single-card-container">
            <div class="skills-ilustration">
              <img
                src="https://res.cloudinary.com/dqstmox0s/image/upload/v1656686864/Ruby_on_Rails-Logo.wine_nimham.png"
                alt="" />
            </div>
            <div class="skills-content">
              <div class="first-part">
                <h4>Full-stack developer</h4>
                <p>
                  I like to start projects from scratch and build solid, clean,
                  and reusable pieces of code.
                </p>
              </div>
              <div class="second-part">
                <h5>Languages:</h5>
                <p>Ruby, JavaScript, SQL, HTML, CSS, Scss</p>
              </div>
              <div class="third-part">
                <h5>Dev tools:</h5>
                <p>
                  Git, Github, Heroku, PostgreSQL, Parcel, Bootstrap, Codepen,
                  Netlify
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="skills-separate"></div>
        <div class="single-card">
          <div className="single-card-container">


            <div class="skills-ilustration">
              <img
                src="https://res.cloudinary.com/dqstmox0s/image/upload/v1656686864/Image_1_uyptvy.png"
                alt="" />
            </div>


            <div class="skills-content">
              <div class="first-part">
                <h4>Shopify store customizations</h4>
                <p>
                  I create professional Shopify stores from scratch, integrating Applications and customizing your theme and design.
                </p>
              </div>
              <div class="second-part">
                <h5>Theme customizations</h5>
                <p>
                  I can customize your current theme, add new features or design your new store from scratch
                </p>
              </div>
              <div >
                <h5>API Integrations</h5>
                <p>
                  From my working experience I have learnt best practices and how to achieve solid API integrations.
                </p>
              </div>


            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalStack