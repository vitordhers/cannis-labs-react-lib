import { ValidatorFn } from '../types/validator-function.type';

export const max: ValidatorFn<number> = (value?: number, validatorMax?: number) => {
  if (!validatorMax) return true;
  if (!value) return true;
  return value <= validatorMax;
};
