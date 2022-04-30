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
          <Link to="/"> Home </Link>
          <Link to="/Information">Informativo</Link>
          <Link to="/Dashboard"> Postos de Coleta </Link>
          <Link to="/About Us"> Sobre Nós </Link>
        </ul>
      </Navbar>
    </header>
  );
};
export default Header;
