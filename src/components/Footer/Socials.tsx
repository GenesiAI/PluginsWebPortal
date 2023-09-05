// import LogoFacebook from "img/LogoFacebook";
// import LogoInstagram from "img/LogoInstagram";
import LogoDiscord from "img/LogoDiscord";
import LogoX from "img/LogoX";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex gap-2 items-center">
      {/* <Link
        to="https://twitter.com/aipluginApp"
        target="_blank"
        className="w-6 h-6 text-white"
      >
        <LogoInstagram />
      </Link> */}
      <Link
        to="https://discord.gg/YfqFkwu9Kq"
        target="_blank"
        className="w-6 h-6 text-white"
      >
        <LogoDiscord />
      </Link>
      <Link
        to="https://twitter.com/aipluginApp"
        target="_blank"
        className="w-6 h-6 text-white"
      >
        <LogoX />
      </Link>
      {/* <Link
        to="https://twitter.com/aipluginApp"
        target="_blank"
        className="w-6 h-6 text-white"
      >
        <LogoFacebook />
      </Link> */}
    </div>
  );
};

export default Socials;
