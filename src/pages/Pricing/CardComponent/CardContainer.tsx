import classNames from "classnames";

type InputProps = {
  isAdvised?: boolean;
  children: React.ReactNode;
};
const CardContainer = ({ children, isAdvised }: InputProps) => (
  <div
    className={classNames(
      "rounded-3xl col-start-1 col-span-8 sm:col-start-2 sm:col-span-6 md:col-span-4 xs:order-none lg:order-none lg:row-start-1 overflow-hidden flex flex-col items-center justify-between pt-9 pb-4 px-4 text-center",
      isAdvised
        ? "my-10 md:my-0 md:order-first lg:col-span-4 md:col-start-3 md:row-start-1 bg-primary text-white shadow-[0px_0px_20px_5px_rgba(99,96,255,0.8)]"
        : "mt-0 md:mt-20 lg:col-span-3 md:row-start-2 md:col-start-auto bg-white shadow-[0px_0px_20px_2px_rgba(99,96,255,0.4)]"
    )}
  >
    {children}
  </div>
);

export default CardContainer;
