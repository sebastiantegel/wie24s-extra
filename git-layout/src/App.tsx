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
      <footer></footer>
    </>
  );
}

export default App;
