import Button from "components/Button";
import ButtonLoading from "components/ButtonLoading";
import Field from "components/Field";
import Typography from "components/Typography";
import { memo, useEffect } from "react";
import { useFormContext, useFormState } from "react-hook-form-mui";

type InputProps = {
  clearChat: () => void;
};
const Footer = ({ clearChat }: InputProps) => {
  const { reset } = useFormContext();
  const { isSubmitting, isSubmitSuccessful } = useFormState();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="flex flex-shrink-0 flex-col items-center gap-2 px-2">
      <Field
        validation={{ min: 1, required: true }}
        name="content"
        label="Make a question!"
        disabled={isSubmitting}
        className="max-h-textarea"
        multiline
        rows={1}
        resizeStyle="none"
      />

      <div className="my-2 flex w-full justify-around">
        <Button
          type="button"
          onClick={() => {
            clearChat();
            reset();
          }}
          className="m-0 px-4 py-1"
        >
          <Typography variant="t5" className="text-bold text-inherit">
            CLEAR
          </Typography>
        </Button>
        <ButtonLoading
          isLoading={isSubmitting}
          type="submit"
          removeText
          className="m-0 px-4 py-1"
        >
          <Typography variant="t5" className="text-bold text-inherit">
            SEND
          </Typography>
        </ButtonLoading>
      </div>
    </div>
  );
};

export default memo(Footer);
