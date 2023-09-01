import Typography from "components/Typography";
import { contacts, home, support } from "const/urls";
import LogoWithName from "img/LogoWithName";
import { Fragment, memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import Socials from "./Socials";

const Links = [
  { to: support, text: "Support" },
  { to: contacts, text: "Contact us" }
];

const renderLinks = Links.map(({ text, to }, index) => (
  <Fragment key={to}>
    <RouterLink to={to}>
      <Typography variant="t4" className="!text-white !font-bold">
        {text}
      </Typography>
    </RouterLink>
    {index !== Links.length - 1 && (
      <div className="w-px bg-white border-0 self-stretch invisible md:visible"></div>
    )}
  </Fragment>
));

const Footer = () => {
  return (
    <footer className="mt-12 min-h-[13.75rem] bg-primary flex flex-col justify-between">
      <div className="pt-6 md:pt-10 px-4 md:px-12">
        <div className="flex md:mx-2 justify-between align-middle">
          <RouterLink to={home}>
            <LogoWithName />
          </RouterLink>
          <Socials />
        </div>
        <hr className="h-px my-4 bg-white border-0" />
        <div className="flex flex-col md:flex-row md:justify-center gap-1 md:gap-2">
          {renderLinks}
        </div>
      </div>
      <div className="h-[2.6875rem] bg-secondary"></div>
    </footer>
  );
};

export default memo(Footer);
