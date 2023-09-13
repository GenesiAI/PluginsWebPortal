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
    <div className="flex flex-col gap-2 items-center px-2">
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

      <div className="flex justify-around w-full my-2">
        <Button
          type="button"
          onClick={() => {
            clearChat();
            reset();
          }}
          className="px-4 py-1 m-0"
        >
          <Typography variant="t5" className="text-inherit text-bold">
            CLEAR
          </Typography>
        </Button>
        <ButtonLoading
          isLoading={isSubmitting}
          type="submit"
          removeText
          className="px-4 py-1 m-0"
        >
          <Typography variant="t5" className="text-inherit text-bold">
            SEND
          </Typography>
        </ButtonLoading>
      </div>
    </div>
  );
};

export default memo(Footer);
