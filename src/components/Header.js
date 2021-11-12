import logo from "../images/logo.svg";

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Around the U.S. logo" className="header__logo" />
    </header>
  );
}
