// import LogoFacebook from "img/LogoFacebook";
// import LogoInstagram from "img/LogoInstagram";
import LogoDiscord from "img/LogoDiscord";
import LogoLinkedin from "img/LogoLinkedin";
import LogoX from "img/LogoX";
import LogoYoutube from "img/LogoYoutube";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex gap-2 items-center">
      {/* <Link
        to="https://twitter.com/aipluginApp"
        target="_blank"
        className="w-6 h-6 fill-white"
      >
        <LogoInstagram />
      </Link> */}
      <Link
        to="https://discord.gg/YfqFkwu9Kq"
        target="_blank"
        className="w-6 h-6 fill-white"
      >
        <LogoDiscord />
      </Link>
      <Link
        to="https://twitter.com/aipluginApp"
        target="_blank"
        className="w-6 h-6 fill-white"
      >
        <LogoX />
      </Link>
      {/* <Link
        to="https://twitter.com/aipluginApp"
        target="_blank"
        className="w-6 h-6 fill-white"
      >
        <LogoFacebook />
      </Link> */}
      <Link
        to="https://www.linkedin.com/company/genesi-ai/"
        target="_blank"
        className="w-6 h-6 fill-white"
      >
        <LogoLinkedin />
      </Link>
      {/* <Link
        to="https://twitter.com/aipluginApp"
        target="_blank"
        className="w-6 h-6 fill-white"
      >
        <LogoTikTok />
      </Link> */}
      {/* <Link
        to="https://twitter.com/aipluginApp"
        target="_blank"
        className="w-6 h-6 fill-white"
      >
        <LogoWhatsapp />
      </Link> */}
      <Link
        to="https://www.youtube.com/@GenesiAI"
        target="_blank"
        className="w-6 h-6 fill-white"
      >
        <LogoYoutube />
      </Link>
    </div>
  );
};

export default Socials;
