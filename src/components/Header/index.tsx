import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <section>
          <img src={Logo} width={45} height={40} /> <span>GitHub Blog</span>
        </section>
      </Link>
    </HeaderContainer>
  );
}
