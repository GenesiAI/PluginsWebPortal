import { ComponentProps } from "react";
import Field from "../../../components/Field";

const messageName =
  "Please enter a valid name (up to 20 letters and no numbers or special characters)";
export const validationName: ComponentProps<typeof Field>["validation"] = {
  maxLength: { value: 20, message: messageName },
  pattern: { value: /^[a-zA-Z ]+$/, message: messageName }
};
const messageModel =
  "Please enter a valid name (up to 50 characters with no spaces and only letters and numbers)";
export const validationModel: ComponentProps<typeof Field>["validation"] = {
  maxLength: { value: 50, message: messageModel },
  pattern: { value: /^[a-zA-Z0-9]+$/, message: messageModel }
};
export const validationDescriptionForHuman: ComponentProps<
  typeof Field
>["validation"] = {
  maxLength: {
    value: 100,
    message: "Please enter a shorter description (up to 100 characters)"
  }
};
export const validationDescriptionForModel: ComponentProps<
  typeof Field
>["validation"] = {
  maxLength: {
    value: 8000,
    message: "Please shorten the description (up to 8000 characters)"
  }
};

export const validationForLogo: ComponentProps<typeof Field>["validation"] = {
  maxLength: {
    value: 2083,
    message: "Please shorten the URL (up to 2083 characters)"
  },
  pattern: {
    value: /\.(gif|jpe?g|png)$/,
    message: "Please provide a valid image URL (PNG, JPEG or GIF)"
  }
};

export const validationForEmail: ComponentProps<typeof Field>["validation"] = {
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please provide a valid email address"
  }
};

export const validationForLegalUrl: ComponentProps<typeof Field>["validation"] =
  {
    pattern: {
      value: /^https?:\/\/.+/,
      message: "Please provide a valid URL starting with http:// or https://"
    }
  };
export const validationSectionName: ComponentProps<typeof Field>["validation"] =
  {
    maxLength: {
      value: 50,
      message:
        "Please enter a valid name (up to 50 characters with no spaces and only letters and numbers)"
    },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message:
        "Please enter a valid name (up to 50 characters with no spaces and only letters and numbers)"
    }
  };
export const validationSectionDescription: ComponentProps<
  typeof Field
>["validation"] = {
  maxLength: {
    value: 200,
    message: "Please enter a valid description (up to 200 characters)"
  },
  pattern: {
    value: /^[a-zA-Z0-9 ]+$/,
    message:
      "Please enter a valid description (up to 50 characters with only spaces, letters and numbers)"
  }
};
export const validationSectionContent: ComponentProps<
  typeof Field
>["validation"] = {
  maxLength: {
    value: 100000,
    message: "Please shorten the content (up to 100.000 characters)"
  }
};
