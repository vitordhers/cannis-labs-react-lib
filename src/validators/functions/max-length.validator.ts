import { ValidatorFn } from "../types/validator-function.type";

export const maxLength: ValidatorFn<
  string
> = (
  value?: string,
  maxLength?: number
) => {
  if (!maxLength) return true;
  if (!value) return true;
  return value.length <= maxLength;
};
