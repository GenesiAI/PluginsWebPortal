import LogoFacebook from "img/LogoFacebook";
import LogoInstagram from "img/LogoInstagram";
import LogoX from "img/LogoX";

const Socials = () => {
  return (
    <div className="flex gap-2 items-center">
      <a href="http" target="_blank" className="w-6 h-6 text-white">
        <LogoInstagram />
      </a>
      <a href="http" target="_blank" className="w-6 h-6 text-white">
        <LogoX />
      </a>
      <a href="http" target="_blank" className="w-6 h-6 text-white">
        <LogoFacebook />
      </a>
    </div>
  );
};

export default Socials;
