import { home } from "const/urls";
import LogoGenesiWithName from "img/LogoGenesiWithName";
import { Link } from "react-router-dom";
import { useHeaderCtx } from "./HeaderCtx";

const Title = () => {
  const { handleCloseNavMenu } = useHeaderCtx();

  return (
    <Link
      to={home}
      onClick={handleCloseNavMenu}
      className="col-start-1 row-start-1 h-10 fill-primary"
    >
      <LogoGenesiWithName />
    </Link>
  );
};

export default Title;
