import React, {
  forwardRef,
  InputHTMLAttributes,
  ChangeEventHandler,
} from "react";
import classnames from "classnames";
import useFocused from "../../hooks/useFocused";

export interface InputProps
  extends InputHTMLAttributes<HTMLElement>,
    Partial<typeof defaultProps> {
  className?: string;
  message?: string;
  preSelected?: boolean;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

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
