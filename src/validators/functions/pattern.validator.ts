import { ValidatorFn } from '../types/validator-function.type';

export const pattern: ValidatorFn<string> = (value?: string, validatorPattern?: RegExp) => {
  if (!validatorPattern) return true;
  if (!value) return false;
  return validatorPattern.test(value);
};
