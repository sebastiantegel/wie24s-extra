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
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
