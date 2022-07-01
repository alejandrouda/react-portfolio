import './TechnicalStack.css'

function TechnicalStack(props) {
  return (
    <section class="technical-stack">
      <div class="skills-cards">
        <div class="single-card">
          <div className="single-card-container">
            <div class="skills-ilustration">
              <img
                src="https://res.cloudinary.com/dqstmox0s/image/upload/v1609861103/portfolio/components/Website_ru5eon.svg"
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
                <p>Ruby on Rails, JavaScript, SQL, HTML, CSS, Scss</p>
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
                src="https://res.cloudinary.com/dqstmox0s/image/upload/v1609861103/portfolio/components/designer_yjuq8i.svg"
                alt="" />
            </div>
            <div class="skills-content">
              <div class="first-part">
                <h4>UX/UI Designer</h4>
                <p>
                  I stand for simple and well-structured content, based on the
                  fundamental design principles
                </p>
              </div>
              <div class="second-part">
                <h5>What I design:</h5>
                <p>UX, UI, Web, Mobile, Responsive design</p>
              </div>
              <div class="third-part">
                <h5>Design tools:</h5>
                <p>Adobe XD, Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalStack