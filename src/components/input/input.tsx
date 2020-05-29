import React, { forwardRef } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import useFocused from "../../hooks/useFocused";

export type InputProps = {
  className?: classnamesType;
  value?: string;
  defaultValue?: string;
  ref?: any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const defaultProps = {};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { children, className, onChange, ...restProps } = props;
  const {
    // focused,
    handleBlur,
    handleFocus,
    handleMouseEnter,
    handleMouseLeave,
  } = useFocused(props, false);
  const classes = classnames("TextField__input bg-none", className);

  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === "null") {
      return "";
    }
    return value;
  };

  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }

  return (
    <input
      className={classes}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onChange={onChange}
      ref={ref}
      {...restProps}
    />
  );
});

Input.defaultProps = defaultProps;
Input.displayName = "Input";

export default Input;
