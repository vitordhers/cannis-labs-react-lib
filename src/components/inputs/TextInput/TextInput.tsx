import {
  FormControl,
  TextField,
  FormControlTypeMap,
  TextFieldProps,
} from "@mui/material";
import React, { FC } from "react";
import {
  useInput,
  Validator,
} from "../../../hooks";
import { toTitleCase } from "../../../utils/to-titlecase.prototype.function";
import { getValidator } from "../../../validators";

import styles from "./TextInput.module.scss";

interface TextInputProps {
  control: Partial<FormControlTypeMap>;
  textField: TextFieldProps;
  label?: string;
  placeholder?: string;
  validators?: Validator[];
}

const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  control: { props: controlProps },
  textField: {
    inputProps,
    variant: textFieldVariant,
  },
  validators,
}) => {
  const validatorsArray: Validator[] =
    [];
  if (validators?.length) {
    validators.map(
      ({ name, params, message }) => {
        let fn = getValidator(name);
        validatorsArray.push({
          name,
          params,
          fn,
          message,
        });
      }
    );
  }

  const {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    errors,
  } = useInput(validatorsArray);

  const onChangeValue = (e: any) => {
    valueChangeHandler(e.target.value);
  };

  return (
    <FormControl
      classes={controlProps?.classes}
      color={controlProps?.color}
      fullWidth={
        controlProps?.fullWidth
      }
      focused={controlProps?.focused}
      hiddenLabel={
        controlProps?.hiddenLabel
      }
      margin={controlProps?.margin}
      size={controlProps?.size}
      sx={controlProps?.sx}
      variant={controlProps?.variant}
    >
      <TextField
        inputProps={inputProps}
        label={label}
        placeholder={placeholder}
        variant={textFieldVariant}
        onChange={onChangeValue}
        onBlur={inputBlurHandler}
        helperText={
          hasError &&
          toTitleCase(
            errors
              .map((err) => err)
              .join(", ")
          )
        }
        error={hasError}
        value={value || ""}
      />
    </FormControl>
  );
};

export default TextInput;
