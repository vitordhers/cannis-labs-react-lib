import { BaseValidator } from "./base-validator.type";

type NumberOnlyValidators =
  | "min"
  | "max"
  | "pattern";

export type NumberValidators =
  | NumberOnlyValidators
  | BaseValidator;
