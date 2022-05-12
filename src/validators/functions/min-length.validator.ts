import { ValidatorFn } from '../types/validator-function.type';

export const minLength: ValidatorFn<string> = (value?: string, validatorMinLength?: number) => {
  if (!validatorMinLength) return true;
  if (!value) return false;
  return value.length >= validatorMinLength;
};
