import React, { FC, ChangeEventHandler, ReactNode } from "react";
import { classnamesType } from "../../interface";
import { AdornProps } from "./sub/adorn";
import useFocused from "../../hooks/useFocused";
import PickInput from "./pick-input";
import handleProps from "./handleProps";

export type TextFieldProps = {
  className?: classnamesType;
  labelClass?: classnamesType;
  insetClass?: classnamesType;
  value?: string | number;
  text?: string;
  placeholder?: string;
  ariaLabel?: string;
  margin?: string;
  focusColor?: string | string[];
  readonly?: boolean;
  disabledColor?: string;
  color?: string;
  disabled?: boolean;
  icon?: string;
  iconSize?: string;
  iconColor?: string;
  iconFocusColor?: string;
  prefix?: string;
  prefixClass?: classnamesType;
  suffix?: string;
  suffixClass?: classnamesType;
  error?: boolean;
  labelDisplay?: string;
  labelMargin?: string;
  autoComplete?: string;
  required?: boolean;
  type?: string;
  defaultValue?: string;
  // align?: string;
  // font?: string;
  // lineHeight?: string;
  // outline?: string;
  // padding?: string;
  // placeholderColor?: string;
  // radius?: string;
  // size?: string;
  // transition?: string;
  children?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & Partial<typeof defaultProps> &
  AdornProps;

const defaultProps = {
  align: "text-left",
  font: "text-sm",
  labelDisplay: "inline-block",
  labelMargin: "mb-2",
  lineHeight: "leading-5",
  outline: "focus:outline-none",
  padding: "px-2",
  placeholderColor: "placeholder-gray-4",
  radius: "rounded",
  size: "h-8",
  transition: "transition ease-in-out duration-200",
};

const TextField: FC<TextFieldProps> = (props) => {
  const {
    focused,
    handleBlur,
    handleFocus,
    // handleMouseEnter,
    // handleMouseLeave,
  } = useFocused(props as any, false);

  const pickProps = handleProps(props, focused);

  return (
    <PickInput
      {...pickProps}
      handleBlur={handleBlur}
      handleFocus={handleFocus}
      focused={focused}
    />
  );
};

TextField.defaultProps = defaultProps;
TextField.displayName = "TextField";

export default TextField;
