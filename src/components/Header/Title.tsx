import { Icon } from "@mui/material";
import { home } from "const/urls";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to={home}>
    <Icon
      component="img"
      src="/FullLogo_Transparent.png"
      sx={{ width: 180, height: 45.9 }}
    />
  </Link>
);

export default Title;
