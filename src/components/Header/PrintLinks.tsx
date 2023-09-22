import classNames from "classnames";
import { useScreenCtx } from "components/Screen/ScreenCtx";
import Typography from "components/Typography";
import { contacts, pricing, questions, support } from "const/urls";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { memo, useMemo } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useHeaderCtx } from "./HeaderCtx";

// Define variants as functions that take 'index' as a parameter
const linkVariants: Variants = {
  initial: {
    opacity: 0,
    y: -10
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.4 } // use index here
  })
};
const Links = [
  { to: support, text: "Support" },
  { to: questions, text: "Questions" },
  { to: pricing, text: "Pricing" },
  { to: contacts, text: "Contact us" }
];
const PrintLinks = () => {
  const { pathname } = useLocation();
  const { isMd } = useScreenCtx();
  const { handleCloseNavMenu } = useHeaderCtx();

  return useMemo(
    () => (
      <AnimatePresence>
        {Links.map(({ text, to }, index) => {
          return (
            <motion.div
              key={text}
              variants={linkVariants}
              initial={!isMd && "initial"}
              animate={!isMd && "animate"}
              custom={index}
            >
              <Link to={to} key={text} onClick={handleCloseNavMenu}>
                <Typography
                  variant="t4"
                  className={classNames(
                    matchPath(pathname, `/${to}`)
                      ? "text-tertiary"
                      : "text-secondary hover:text-tertiary",
                    "ps-4 text-3xl font-bold md:ps-0 md:text-2xl"
                  )}
                >
                  {text}
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
