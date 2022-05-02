import { AppInfo, Footer, InfoList } from "./styles";
import LogoHeader from "../../assets/image/logo.png";

const FooterComponent = () => {
  return (
    <Footer>
      <div>
        <figure>
          <img src={LogoHeader} alt="logo_footer" />{" "}
        </figure>
        <p>
          Esta pagina foi desenvolvida para auxiliar e concientizar sobre o
          descarte de lixo
        </p>
      </div>
      <AppInfo>
        <InfoList>
          <li>Copyright © 2021. NOME FANTASIA AQUI</li>
          <li>CNPJ 00.000.000/0000-00 </li>
          <li>Todos os direitos reservados</li>
          <li>Desenvolvido por TUTOR</li>
        </InfoList>
      </AppInfo>
    </Footer>
  );
};

export default FooterComponent;
