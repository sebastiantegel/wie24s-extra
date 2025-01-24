import "./App.scss";

function App() {
  return (
    <>
      <header></header>
      <main></main>
      <footer>
        <div className="contact-socials contact-content">
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
      </footer>
    </>
  );
}

export default App;
