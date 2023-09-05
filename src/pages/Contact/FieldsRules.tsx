import Field from "components/Field";
import { ComponentProps } from "react";

const messageName = "Please enter a valid name";
export const validationName: ComponentProps<typeof Field>["validation"] = {
  maxLength: { value: 20, message: messageName },
  pattern: { value: /^[a-zA-Z ]+$/, message: messageName }
};

export const validationForEmail: ComponentProps<typeof Field>["validation"] = {
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please provide a valid email address"
  }
};

export const validationMessage: ComponentProps<typeof Field>["validation"] = {
  minLength: {
    value: 1,
    message: "Please enter a message"
  }
};
