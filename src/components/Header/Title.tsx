import { SxProps, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const sxProps: SxProps<Theme> = {
  typography: {
    xs: "h6",
    md: "h5"
  },
  mr: { xs: 2, md: 4 },
  ml: { xs: 0, md: 3 },
  flexGrow: { xs: 1, md: 0 },
  order: { xs: 1, md: 0 },
  letterSpacing: ".1rem",
  color: "inherit",
  textDecoration: "none",
  fontSize: "2rem"
};

const Title = () => (
  <Typography
    noWrap
    component={Link}
    to="/"
    sx={sxProps}
    className="!font-bold flex"
  >
    Genesi AI
  </Typography>
);

export default Title;
