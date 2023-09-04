import Typography from "components/Typography";
import { Link, matchPath, useLocation } from "react-router-dom";
import useHeader from "./useHeader";

type InputProps = ReturnType<typeof useHeader>;
const HeaderMd = ({ links }: InputProps) => {
  const { pathname } = useLocation();
  return (
    <div className="md:flex gap-4 hidden col-span-8 justify-center">
      {links.map((link) => {
        const linkTo = `/${link.toLowerCase().replace(" ", "-")}`;
        return (
          <Link to={linkTo} key={link}>
            <Typography
              variant="t4"
              className={(matchPath(pathname, linkTo)
                ? "text-tertiary"
                : "text-secondary hover:text-tertiary"
              ).concat(" font-bold")}
            >
              {link}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMd;
