// import LogoFacebook from "img/LogoFacebook";
// import LogoInstagram from "img/LogoInstagram";
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
