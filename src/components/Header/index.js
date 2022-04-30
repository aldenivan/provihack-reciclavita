import LogoHeader from "../../assets/image/logo.png";
import { Navbar } from "./styled";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar>
        <Link to="/">
          {" "}
          <img src={LogoHeader} alt="logo_header" />{" "}
        </Link>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/Information">Informativo</Link></li>
          <li><Link to="/Dashboard"> Postos de Coleta </Link></li>
          <li><Link to="/About Us"> Sobre Nós </Link></li>
        </ul>
      </Navbar>
    </header>
  );
};
export default Header;
