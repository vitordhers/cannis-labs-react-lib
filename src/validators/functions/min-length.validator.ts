import { ValidatorFn } from "../types/validator-function.type";

export const minLength: ValidatorFn<
  string
> = (
  value?: string,
  minLength?: number
) => {
  if (!minLength) return true;
  if (!value) return false;
  return value.length >= minLength;
};
