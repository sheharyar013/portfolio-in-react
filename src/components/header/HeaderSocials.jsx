import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sheharyar-butt-7bb01718b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/sheharyar013" target="_blank">
        <FaGithub />
      </a>
      <a href="https://phoenix-tech-seven.vercel.app/" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
