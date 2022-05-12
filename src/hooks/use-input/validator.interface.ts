import { ValidatorFn, ValidatorNames } from '../../validators';

export interface Validator<T = any> {
  name: ValidatorNames;
  params: any;
  message: string;
  fn?: ValidatorFn<T>;
}
