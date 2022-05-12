import { ValidatorFn } from '../types';

export const min: ValidatorFn<number> = (value?: number, validatorMin?: number) => {
  if (!validatorMin) return true;
  if (!value) return false;
  return value <= validatorMin;
};
