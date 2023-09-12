import classNames from "classnames";
import Typography from "components/Typography";
import { Link, matchPath, useLocation } from "react-router-dom";
import useHeader from "./useHeader";

type InputProps = ReturnType<typeof useHeader>;
const PrintLinks = ({ links, handleCloseNavMenu }: InputProps) => {
  const { pathname } = useLocation();
  return (
    <>
      {links.map((link) => {
        const linkTo = `/${link.toLowerCase().replace(" ", "-")}`;
        return (
          <Link to={linkTo} key={link} onClick={handleCloseNavMenu}>
            <Typography
              variant="t4"
              className={classNames(
                matchPath(pathname, linkTo)
                  ? "text-tertiary"
                  : "text-secondary hover:text-tertiary",
                "font-bold ps-4 md:ps-0"
              )}
            >
              {link}
            </Typography>
          </Link>
        );
      })}
    </>
  );
};

export default PrintLinks;
