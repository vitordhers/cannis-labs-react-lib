import { BaseValidator } from "./base-validator.type";

type StringOnlyValidators =
  | "minLength"
  | "maxLength"
  | "pattern";

export type StringValidators =
  | StringOnlyValidators
  | BaseValidator;
