import { useState } from 'react';
import { Validator } from './validator.interface';

export const useInput = (validators: Validator<string>[]) => {
  const [value, setValue] = useState<string>();
  const [isTouched, setIsTouched] = useState(false);
  //   const [isDirty, setIsDirty] =
  //     useState(false);

  const errors = validators.map((v) => v.fn && !v.fn(value, v.params) && v.message).filter((r) => !!r) as string[];

  const isValid = !errors.length;

  const hasError = !isValid && isTouched;

  const valueChangeHandler = (str: string) => {
    setValue(str);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    errors,
  };
};
