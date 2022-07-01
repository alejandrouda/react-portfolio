import './Footer.css'

function Footer(props) {
  return (
    <div class="footer">
      <div class="footer-icons">
        <a href="https://www.linkedin.com/in/alejandro-udaquiola/" target="_blank">
          <i class="footer-icon fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/alejandrouda" target="_blank">
          <i class="footer-icon fa fa-github"></i>
        </a>
        <a href="https://dribbble.com/alejandrouda" target="_blank">
          <i class="footer-icon fa fa-dribbble"></i>
        </a>
        <a href="https://www.behance.net/alejandudaquio" target="_blank">
          <i class="footer-icon fa fa-behance"></i>
        </a>
        <a href="https://twitter.com/ale_udaquiola" target="_blank">
          <i class="footer-icon fa fa-twitter"></i>
        </a>
      </div>
      <div class="copyright">
        <p>Designed & built by Alejandro Udaquiola 2021</p>
      </div>
    </div>
  )
}

export default Footer