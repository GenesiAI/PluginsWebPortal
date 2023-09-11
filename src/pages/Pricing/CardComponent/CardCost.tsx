import classNames from "classnames";
import Typography from "components/Typography";

type InputProps = {
  cost: string;
  isAdvised?: boolean;
};
const CardCost = ({ isAdvised, cost }: InputProps) => {
  const isNumber = cost === "0" || !!Number(cost);

  return (
    <>
      <div className="my-6 md:my-0 md:h-36 flex justify-center items-end">
        {isNumber ? (
          <>
            <Typography
              variant="t1"
              className="text-inherit font-bold text-[5rem] lg:text-[6.9375rem] inline"
            >
              {cost}
            </Typography>
            <Typography
              className="text-inherit font-bold inline ms-2"
              variant="t2"
            >
              $
            </Typography>
            <Typography className="text-inherit font-bold inline" variant="t3">
              /M
            </Typography>
          </>
        ) : (
          <Typography variant="t3" className="text-inherit">
            {cost}
          </Typography>
        )}
      </div>
      <div
        className={classNames(
          "h-px w-32 md:mt-14",
          isAdvised ? "bg-white" : "bg-primary"
        )}
      ></div>
    </>
  );
};

export default CardCost;
