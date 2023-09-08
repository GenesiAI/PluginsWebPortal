import { Container } from "@mui/material";
import classNames from "classnames";

type InputProps = {
  isAdvised?: boolean;
  children: React.ReactNode;
};
const CardContainer = ({ children, isAdvised }: InputProps) => (
  <Container
    className={classNames(
      "rounded-6xl bg-white shadow-[0px_0px_20px_2px_rgba(99,_96,_255,_0.4)] overflow-hidden flex flex-col",
      isAdvised ? "col-span-4" : "col-span-3"
    )}
  >
    {children}
  </Container>
);

export default CardContainer;
