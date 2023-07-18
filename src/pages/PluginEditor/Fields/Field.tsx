import { ComponentProps } from "react";
import { TextFieldElement } from "react-hook-form-mui";

type InputProps = {
  name: string;
  label: string;
  validation: ComponentProps<typeof TextFieldElement>["validation"];
  variant?: ComponentProps<typeof TextFieldElement>["variant"];
  multiline?: ComponentProps<typeof TextFieldElement>["multiline"];
  rows?: ComponentProps<typeof TextFieldElement>["rows"];
  helperText?: ComponentProps<typeof TextFieldElement>["helperText"];
  className?: ComponentProps<typeof TextFieldElement>["className"];
};
const Field = (props: InputProps) => (
  <TextFieldElement required variant="filled" fullWidth {...props} />
);

export default Field;
