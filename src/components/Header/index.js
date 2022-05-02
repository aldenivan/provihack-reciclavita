import LogoHeader from "../../assets/image/logo.png";
import { Navbar } from "./styled";
import IconMenu from "../../assets/Icons/Hamburguer.png";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar>
        <Link to="/">
          <img src={LogoHeader} alt="logo_header" />{" "}
        </Link>

        <img src={IconMenu} alt="icon-menu" className="icon-menu" />

        <ul className="lista">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/information">Informativo</Link>
          </li>
          <li>
            <Link to="/dashboard"> Postos de Coleta </Link>
          </li>
          <li>
            <Link to="/aboutUs"> Sobre Nós </Link>
          </li>
        </ul>
      </Navbar>
    </header>
  );
};
export default Header;
