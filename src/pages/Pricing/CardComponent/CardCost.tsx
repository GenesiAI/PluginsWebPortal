import classNames from "classnames";
import Typography from "components/Typography";

type InputProps = {
  cost: string;
  isAdvised?: boolean;
};
const CardCost = ({ isAdvised, cost }: InputProps) => {
  const isNumber = cost === "0" || !!Number(cost);

  return (
    <div className={classNames("", isAdvised ? "col-span-2" : "col-span-1")}>
      {isNumber ? (
        <>
          <Typography>{cost}</Typography>
          <Typography>$/M</Typography>
        </>
      ) : (
        <Typography>{cost}</Typography>
      )}
    </div>
  );
};

export default CardCost;
