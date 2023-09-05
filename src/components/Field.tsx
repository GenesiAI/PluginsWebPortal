import { ComponentProps } from "react";
import { TextFieldElement, TextareaAutosizeElement } from "react-hook-form-mui";

type TextArea = {
  multiline?: ComponentProps<typeof TextareaAutosizeElement>["multiline"];
  rows?: ComponentProps<typeof TextareaAutosizeElement>["rows"];
  resizeStyle?: ComponentProps<typeof TextareaAutosizeElement>["resizeStyle"];
};

type InputProps = {
  name: string;
  label: string;
  validation: ComponentProps<typeof TextFieldElement>["validation"];
  variant?: ComponentProps<typeof TextFieldElement>["variant"];
  helperText?: ComponentProps<typeof TextFieldElement>["helperText"];
  className?: ComponentProps<typeof TextFieldElement>["className"];
} & TextArea;

const isTextArea = (props: InputProps): boolean =>
  !!props.rows || !!props.multiline || !!props.resizeStyle;

const Field = (props: InputProps) =>
  isTextArea(props) ? (
    <TextareaAutosizeElement
      required
      variant="filled"
      resizeStyle="vertical"
      fullWidth
      {...props}
    />
  ) : (
    <TextFieldElement required variant="filled" fullWidth {...props} />
  );

export default Field;
