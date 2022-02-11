import Logo from "./img.jpeg";
import "./Header.css";

function Header() {
  return (
    <div className="header__wrapper">
      {/* Logo */}
      <div className="header__logo">
        <img src={Logo} width={25} />
      </div>
      {/* Menu Items */}
      <div className="header__menuItems">
        <a href="#">Free Coins</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
