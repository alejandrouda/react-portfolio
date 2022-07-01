import './AboutMe.css'

function AboutMe(props) {
  return (
    <section className='about-me'>
      <div class="ilustration">
        <img
          src="https://res.cloudinary.com/dqstmox0s/image/upload/v1609793839/portfolio/components/Website_jzhxct.svg"
          alt=""
        />
      </div>
      <div class="description">
        <div class="description-content">
          <h1>About me</h1>
          <p>
            I transform creative ideas into responsive web applications, designing and coding solid features and implementations.
            I have working experience as a Developer Support Engineer in Algolia, a SaaS company that powers billions of Search queries for thousands of companies every month.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe