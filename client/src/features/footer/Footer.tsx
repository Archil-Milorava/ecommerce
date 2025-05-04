import TextReveal from "@/components/TextReveal";
import footerLogo from "../../assets/footerLogo.svg";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="bg-[#F9F5EB] w-full h-auto flex flex-col items-center justify-center gap-8 py-11 px-4">
      <TextReveal delay={0}>
        <div>
          <img src={footerLogo} alt="logo" />
        </div>
      </TextReveal>
      <div className="flex gap-2 items-center">
        <TextReveal delay={0.2}>
          <p>Built by Archil Milorava</p>
        </TextReveal>
        <TextReveal delay={0.4}>
          <p>
            <VscGithubAlt />
          </p>
        </TextReveal>
      </div>
    </div>
  );
};

export default Footer;
