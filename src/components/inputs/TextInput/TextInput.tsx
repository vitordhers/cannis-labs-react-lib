import { TextInput as TxtInput, TextInputProps as TxtInpurProps } from '@mantine/core';
import { useForm } from '@mantine/form';
import * as React from 'react';
import { FC } from 'react';
import { useInput, Validator } from '../../../hooks';
import { toTitleCase } from '../../../utils/to-titlecase.prototype.function';
import { getValidator, ValidatorFn } from '../../../validators';

// import styles from "./TextInput.module.scss";

interface TextInputProps {
  props?: TxtInpurProps;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  initialValue?: string;
  validators?: Validator<string>[];
  valueChangeHandler: (e: string) => any;
}

export const TextInput: FC<TextInputProps> = ({
  valueChangeHandler: changeHandler,
  props = {},
  label,
  placeholder,
  disabled = false,
  initialValue = '',
  validators = [],
}) => {
  const validatorsArray: Validator<string>[] = [];
  if (validators?.length) {
    validators.map(({ name, params, message }) => {
      const fn = getValidator(name) as ValidatorFn<string>;
      validatorsArray.push({
        name,
        params,
        fn,
        message,
      });
    });
  }

  const form = useForm({
    initialValues: {
      value: initialValue,
    },

    validate: {
      value: (val) =>
        validatorsArray.map((validator) =>
          validator.fn && validator.fn(val, validator.params) ? null : validator.message,
        ),
    },
  });

  const { value, isValid, hasError, valueChangeHandler, inputBlurHandler, errors } = useInput(validatorsArray);

  const onInput = (e: any) => {
    console.log(e);
    changeHandler(e.target.value);
    valueChangeHandler(e.target.value);
  };

  return (
    <TxtInput
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      {...form.getInputProps('value')}
      {...props}
      onBlur={inputBlurHandler}
      onInput={onInput}
    />
  );
};
