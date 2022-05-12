import { ValidatorFn } from '../types/validator-function.type';

export const maxLength: ValidatorFn<string> = (value?: string, validatorMaxLength?: number) => {
  if (!validatorMaxLength) return true;
  if (!value) return true;
  return value.length <= validatorMaxLength;
};
