import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="logotype">
        <div className="image-container">
          <img
            src={
              "https://creativetacos.com/wp-content/uploads/2024/02/6793683f-6c2e-4632-bea7-186501c209a9.webp"
            }
            alt="Logo"
          />
        </div>
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
  );
};
