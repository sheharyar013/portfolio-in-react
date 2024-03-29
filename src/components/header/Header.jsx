import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me3-removebg-preview.png";

import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <section>
      <div className="container header__container">
        <h5>{"Hello I'm"}</h5>
        <h1>Sheharyar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Header;
