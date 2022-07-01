import './Portfolio.css'

function Portfolio(props) {
  return (
    <section id="portfolio">
      <div class="portfolio-section">
        <div className="portfolio-main-container">
          <div class="portfolio-proyect">
            <div class="portfolio-title">
              <h1>Some of my recent work</h1>
            </div>
            <div class="portfolio-content">
              <a href="http://degustar-commerce.herokuapp.com/" target="_blank">
                <h4>Takumi</h4>
              </a>
              <p>
                This is a fully-responsive webapp for a restaurante site, that
                counts with an interactive menu, and dinamicly assigned
                allergens for meals. There is a filter to find vegan,
                vegetarian, unlactosed and gluten-free options on the menu.
              </p>
              <div class="portfolio-images portfolio-responsive">
                <div class="takumi-web">
                  <a href="http://restaurante-website.herokuapp.com/" target="_blank">
                    <img src="https://res.cloudinary.com/dqstmox0s/image/upload/v1612949944/Home_-_1366_1_rvqjtm.svg"
                      alt="Takumi image web" />
                  </a>
                </div>
                <div class="takumi-mobile">
                  <a href="http://restaurante-website.herokuapp.com/" target="_blank">
                    <img src="https://res.cloudinary.com/dqstmox0s/image/upload/v1612949944/Component_209_1_r7zdb9.svg"
                      alt="Takumi image mobile" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="portfolio-separate"></div>
          <div class="portfolio-proyect">
            <div class="portfolio-content">
              <a href="http://degustar-commerce.herokuapp.com/" target="_blank">
                <h4>Degustar</h4>
              </a>
              <p>
                Degustar is a fully responsive e-commerce web application that
                offers gourmet products.
              </p>
              <div class="portfolio-images portfolio-responsive">
                <a href="http://degustar-commerce.herokuapp.com/" target="_blank">
                  <img
                    src="https://res.cloudinary.com/dqstmox0s/image/upload/v1609945604/portfolio/components/Landing_web_dw1yzk.svg"
                    alt="Degustar image web" />
                </a>
                <a href="http://degustar-commerce.herokuapp.com/" target="_blank">
                  <img
                    src="https://res.cloudinary.com/dqstmox0s/image/upload/v1609944586/portfolio/components/Landing_mobile_rxskha.png"
                    alt="Degustar image mobile" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Portfolio