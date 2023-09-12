import { home } from "const/urls";
import LogoGenesiWithName from "img/LogoGenesiWithName";
import { Link } from "react-router-dom";
import useHeader from "./useHeader";

type InputProps = ReturnType<typeof useHeader>;

const Title = ({ handleCloseNavMenu }: InputProps) => (
  <Link
    to={home}
    onClick={handleCloseNavMenu}
    className="fill-primary h-10 col-span-1 md:col-span-2"
  >
    <LogoGenesiWithName />
  </Link>
);

export default Title;
