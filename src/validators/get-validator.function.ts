import {
  maxLength,
  minLength,
  pattern,
  required,
  length,
  max,
  min,
} from ".";
import { ValidatorNames } from "./types";

export const getValidator = (
  name: ValidatorNames
) => {
  switch (name) {
    case "required":
      return required;
    case "pattern":
      return pattern;
    case "maxLength":
      return maxLength;
    case "minLength":
      return minLength;
    case "length":
      return length;
    case "min":
      return min;
    case "max":
      return max;
    default:
      throw new Error(
        "Validator is not valid for text!"
      );
  }
};
