import footerLogo from "../../assets/footerLogo.svg";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="bg-[#F9F5EB] w-full h-auto flex flex-col items-center justify-center gap-8 py-11">
      <div>
        <img src={footerLogo} alt="logo" />
      </div>
      <div className="flex gap-2 items-center">
        <p>Built by Archil Milorava</p>
        <p>
          <VscGithubAlt />
        </p>
      </div>
    </div>
  );
};

export default Footer;
