import Image from "../assets/PP.jpg";

function Contact() {
  return (
    <section className="hero-section" id="contact">
      <div className="connect">
        <h3>Connect with me</h3>
        <p>I am always excited to explore new opportunities and</p>
        <p>collaborate on innovative projects.</p>
      </div>

      <div className="flex-boxes">
        <div className="via-contact">
          <p>
            If you'd like to get in touch or discuss potential collaborations,
            please feel free to contact me.
          </p>

          <h3>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/sarah-moses-465a3438a"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>
          </h3>

          <div className="contact-details">
            <a href="mailto:sarahmoses1102@gmail.com" className="contact-item">
              Email: sarahmoses1102@gmail.com
            </a>
            <a href="tel:+2347028104443" className="contact-item">
              Phone: (+234) 704 5527 997
            </a>
            <a href="tel:+2348111883671" className="contact-item">
              Phone: (+234) 811 1883 671
            </a>
          </div>
        </div>

        <div className="contact-image">
          <img src={Image} alt="Portrait" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
