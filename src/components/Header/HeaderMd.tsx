import Button from "@mui/material/Button";
import { memo } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import useHeader from "./useHeader";

type InputProps = ReturnType<typeof useHeader>;
const HeaderMd = ({
  handleCloseNavMenu,
  handleLogin,
  handleLogout,
  links
}: InputProps) => {
  const { pathname } = useLocation();
  return (
    <div>
      {links.map((link) => {
        if (link.toLowerCase() === "login" || link.toLowerCase() === "logout") {
          const isLogin = link.toLowerCase() === "login";
          return (
            <Button
              variant={isLogin ? "contained" : "outlined"}
              key={link}
              onClick={isLogin ? handleLogin : handleLogout}
              className={`!shadow-lg ${
                isLogin ? "!shadow-violet-600" : "!shadow-violet-200"
              }`}
              sx={{
                my: 2,
                // color: "white",
                display: "block",
                fontWeight: "bold"
              }}
            >
              {link}
            </Button>
          );
        }
        const linkTo = `/${link.toLowerCase().replace(" ", "-")}`;
        return (
          <Link
            to={linkTo}
            className={
              matchPath(pathname, linkTo)
                ? "shadow-lg shadow-violet-400"
                : "hover:shadow-md"
            }
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
};

export default memo(HeaderMd);
