import classNames from "classnames";
import Typography from "components/Typography";

type InputProps = {
  cost: string;
  isAdvised?: boolean;
};
const CardCost = ({ isAdvised, cost }: InputProps) => {
  const isNumber = cost === "0" || !!Number(cost);

  return (
    <div className="grid w-full basis-2/6 grid-cols-6 grid-rows-2 items-end">
      {isNumber ? (
        <div className="col-span-6 row-start-1 ">
          <Typography variant="t1" className="inline font-bold text-inherit">
            {cost}
          </Typography>
          <Typography
            className="ms-2 inline font-bold text-inherit"
            variant="t3"
          >
            $
          </Typography>
          <Typography className="inline font-bold text-inherit" variant="t4">
            /M
          </Typography>
        </div>
      ) : (
        <Typography variant="t3" className="col-span-6 text-inherit">
          {cost}
        </Typography>
      )}
      <div
        className={classNames(
          "col-span-2 col-start-3 row-span-1 row-start-2 h-px md:mt-14",
          isAdvised ? "bg-white" : "bg-primary"
        )}
      ></div>
    </div>
  );
};

export default CardCost;
