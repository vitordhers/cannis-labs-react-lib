import { ValidatorFn } from '../types/validator-function.type';

export const length: ValidatorFn<string> = (value?: string, validatorLength?: number) => {
  if (!length) return true;
  if (!value) return false;
  return value.length === validatorLength;
};
