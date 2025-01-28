import "./App.scss";
import "./index.scss";
import logo from "./assets/bilder/jordan-logo-bilder.jpg";

function App() {
  return (
    <>
      <header>
        <h2>Lorem ipsum</h2>
        <div className="logoTyp">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>This is the main content for the page</main>
      <footer>
        <div className="contact-socials contact-content">
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              Email: info@gitflow.com
            </p>
            <p>Phonenumber: 0701234567</p>
          </div>
          <div className="footer-address">
          <h3>Address</h3>
          <p>Gustavslundsvägen 151</p>
          <p>167 51 Bromma</p>
        </div>
        <div className="footer-socials">
            <ul className="icon-socials">
              <li>
                <a href="https://instagram.com" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
                <span>Instagram</span>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <span>Twitter</span>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <i className="fab fa-facebook facebook"></i>
                </a>
                <span>Facebook</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
