import logo from "../images/logo.svg";

export function Header(props) {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Around the U.S. logo"
        className="header__logo"
      />
    </header>
  );
}

