import classNames from "classnames";
import { useScreenCtx } from "components/Screen/ScreenCtx";
import Typography from "components/Typography";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { memo, useMemo } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

// Define variants as functions that take 'index' as a parameter
const linkVariants: Variants = {
  initial: {
    opacity: 0,
    y: -10
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.4, duration: 0.6 } // use index here
  })
};
const Pages = ["Support", "Contacts", "Questions"];

type InputProps = {
  handleCloseNavMenu: () => void;
};
const PrintLinks = ({ handleCloseNavMenu }: InputProps) => {
  const { pathname } = useLocation();
  const { isMd } = useScreenCtx();

  return useMemo(
    () => (
      <AnimatePresence>
        {Pages.map((link, index) => {
          const linkTo = `/${link.toLowerCase().replace(" ", "-")}`;
          return (
            <motion.div
              key={link}
              variants={linkVariants}
              initial={!isMd && "initial"}
              animate={!isMd && "animate"}
              custom={index}
            >
              <Link to={linkTo} key={link} onClick={handleCloseNavMenu}>
                <Typography
                  variant="t4"
                  className={classNames(
                    matchPath(pathname, linkTo)
                      ? "text-tertiary"
                      : "text-secondary hover:text-tertiary",
                    "ps-4 text-2xl font-bold md:ps-0"
                  )}
                >
                  {link}
                </Typography>
              </Link>
            </motion.div>
          );
        })}
      </AnimatePresence>
    ),
    [pathname, isMd, handleCloseNavMenu]
  );
};

export default memo(PrintLinks);
