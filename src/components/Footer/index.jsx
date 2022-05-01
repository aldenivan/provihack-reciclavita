import { AppInfo, Container, InfoList } from "./styles";
import LogoHeader from "../../assets/image/logo.png";

const FooterComponent = () => {

  return (
    <Container>

      <div>
        <figure>
          <img src={LogoHeader} alt="logo_footer" />{" "}
        </figure>
      </div>
      <AppInfo>
        <InfoList>
          <li>Copyright © 2021. NOME FANTASIA AQUI</li>
          <li>CNPJ 00.000.000/0000-00 </li>
          <li>Todos os direitos reservados</li>
          <li>Desenvolvido por TUTOR</li>
        </InfoList>
      </AppInfo>


    </Container>
  )


}

export default FooterComponent;
