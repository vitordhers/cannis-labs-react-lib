import { ValidatorFn } from '../types/validator-function.type';

export const required: ValidatorFn<any> = (value?: any) => {
  if (typeof value === 'string') {
    return !!value && value.trim() !== '';
  }
  return !!value;
};
