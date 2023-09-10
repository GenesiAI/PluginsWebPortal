import { home } from "const/urls";
import LogoGenesiWithName from "img/LogoGenesiWithName";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to={home} className="fill-primary h-10 w-auto">
    <LogoGenesiWithName />
  </Link>
);

export default Title;
