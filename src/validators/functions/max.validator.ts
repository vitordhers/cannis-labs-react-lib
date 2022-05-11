import { ValidatorFn } from "../types/validator-function.type";

export const max: ValidatorFn<
  number
> = (value?: number, max?: number) => {
  if (!max) return true;
  if (!value) return true;
  return value <= max;
};
