import { ValidatorFn } from "../types";

export const min: ValidatorFn<
  number
> = (value?: number, min?: number) => {
  if (!min) return true;
  if (!value) return false;
  return value <= min;
};
