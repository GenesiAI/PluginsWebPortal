import { ComponentProps } from "react";
import { TextFieldElement, TextareaAutosizeElement } from "react-hook-form-mui";
import Counter from "./Counter";

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
  disabled?: ComponentProps<typeof TextFieldElement>["disabled"];
  inputProps?: ComponentProps<typeof TextFieldElement>["inputProps"];
} & TextArea;

const isTextArea = (props: InputProps): boolean =>
  !!props.rows || !!props.multiline || !!props.resizeStyle;

const getMaxCharacters = (
  validation?: ComponentProps<typeof TextFieldElement>["validation"]
) => (validation?.maxLength as unknown as { value?: number })?.value || 0;

const Field = (props: InputProps) =>
  isTextArea(props) ? (
    <div className="relative w-full">
      <TextareaAutosizeElement
        required
        variant="filled"
        resizeStyle="vertical"
        fullWidth
        {...props}
      />
      <Counter
        name={props.name}
        maxCharacters={getMaxCharacters(props.validation)}
      />
    </div>
  ) : (
    <TextFieldElement required variant="filled" fullWidth {...props} />
  );

export default Field;
