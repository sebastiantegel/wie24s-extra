import "./App.scss";
import "./index.scss";
import logo from "./assets/bilder/jordan-logo-bilder.jpg";

function App() {
  return (
    <>
      <header>
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
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
