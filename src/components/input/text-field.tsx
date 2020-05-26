import React, { Component, createRef, FC } from "react";
import Input from "./input";
import classnames from "classnames";
import Icon from "../icon";
import { classnamesType } from "../../interface";
import Adorn, { AdornProps } from "./sub/adorn";
import Message from "./sub/message";

type TextFieldProps = {
  className?: classnamesType;
  labelClass?: classnamesType;
  insetClass?: classnamesType;
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
} & Partial<typeof defaultProps> &
  Partial<AdornProps>;

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

// TODO: 未完成
const TextField: FC<TextFieldProps> = (props) => {

  return <></>;
};

TextField.defaultProps = defaultProps;
TextField.displayName = "TextField";

export default TextField;
