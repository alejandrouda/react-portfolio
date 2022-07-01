
import "./ContactForm.css"

function ContactForm(props) {
  return (
    <section id="contact-form">
      <div class="contact-section">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/mqkgwegn" method="POST" autocomplete="off">
          <div class="name-mail">
            <div class="field-input field-margin">
              <label>
                <input type="text" name="name" placeholder="Name" />
              </label>
            </div>
            <div class="field-input">
              <label>
                <input type="text" name="_replyto" placeholder="Email" />
              </label>
            </div>
          </div>
          <div class="field-message">
            <label>
              <textarea name="message" placeholder="Message"></textarea>
            </label>
          </div>
          <button class="secondary-btn" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}
export default ContactForm
