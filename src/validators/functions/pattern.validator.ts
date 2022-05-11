import { ValidatorFn } from "../types/validator-function.type";

export const pattern: ValidatorFn<
  string
> = (
  value?: string,
  pattern?: RegExp
) => {
  if (!pattern) return true;
  if (!value) return false;
  return pattern.test(value);
};
