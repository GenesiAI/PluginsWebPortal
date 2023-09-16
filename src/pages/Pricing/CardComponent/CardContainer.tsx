import classNames from "classnames";

type InputProps = {
  isAdvised?: boolean;
  children: React.ReactNode;
};
const CardContainer = ({ children, isAdvised }: InputProps) => (
  <div
    className={classNames(
      "flex h-full w-full max-w-md flex-col items-center justify-between overflow-hidden rounded-3xl px-2 py-8 text-center",
      isAdvised
        ? "bg-primary text-white shadow-[0px_0px_20px_5px_rgba(99,96,255,0.8)] md:row-span-2 md:row-start-1 md:my-0"
        : "bg-white shadow-[0px_0px_20px_2px_rgba(99,96,255,0.4)] md:row-span-1 md:row-start-2"
    )}
  >
    {children}
  </div>
);

export default CardContainer;
