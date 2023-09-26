import classNames from "classnames";
import { useWatch } from "react-hook-form";
import Typography from "./Typography";

type InputProps = {
  name: string;
  maxCharacters: number;
};

const Counter = ({ maxCharacters, ...props }: InputProps) => {
  if (maxCharacters <= 0) return null;
  return <CounterCore maxCharacters={maxCharacters} {...props} />;
};
const CounterCore = ({ maxCharacters, name }: InputProps) => {
  const valueLen = (useWatch({ name, exact: true }) as string)?.length || 0;
  return (
    <Typography
      variant="t6"
      className={classNames(
        "absolute top-3 right-3",
        valueLen <= maxCharacters ? "text-primary" : "text-danger"
      )}
    >
      {`${valueLen} / ${maxCharacters}`}
    </Typography>
  );
};

export default Counter;
