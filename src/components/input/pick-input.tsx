import React, { FC, ReactNode } from "react";
import Input from "./input";
import classnames from "classnames";
import Icon from "../icon";
import Adorn from "./sub/adorn";
import Message from "./sub/message";
import { classnamesType } from "../../interface";

export type PickInputProps = {
  ariaLabel?: string;
  zIndex?: string;
  className?: classnamesType;
  margin?: string;
  text?: string;
  labelClass?: classnamesType;
  labelDisplay?: string;
  labelMargin?: string;
  insetClass?: classnamesType;
  color?: string;
  focusColor?: string;
  font?: string;
  outline?: string;
  radius?: string;
  size?: string;
  transition?: string;
  icon?: string;
  iconColor?: string;
  iconSize?: string;
  prefix?: string;
  prefixClass?: classnamesType;
  align?: string;
  lineHeight?: string;
  padding?: string;
  placeholderColor?: string;
  readonly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  handleBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  handleFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  suffix?: string;
  suffixClass?: classnamesType;
  focused?: boolean;
  children?: ReactNode;
  inputProps?: string;
  adornProps?: { [prop: string]: any };
  [prop: string]: any;
};

const PickInput: FC<PickInputProps> = (props: PickInputProps) => {
  const {
    ariaLabel,
    zIndex,
    className,
    margin,
    text,
    labelClass,
    labelDisplay,
    labelMargin,
    insetClass,
    color,
    focusColor,
    font,
    outline,
    radius,
    size,
    transition,
    icon,
    iconColor,
    iconSize,
    prefix,
    prefixClass,
    align,
    lineHeight,
    padding,
    placeholderColor,
    readonly,
    disabled,
    placeholder,
    handleBlur,
    handleFocus,
    suffix,
    suffixClass,
    focused,
    children,
    inputProps,
    adornProps,
  } = props;
  return (
    <div
      aria-label={ariaLabel}
      className={classnames(
        "max-w-full min-w-0 TextField",
        zIndex,
        className,
        margin
      )}
    >
      {text ? (
        <label className={classnames(labelClass, labelDisplay, labelMargin)}>
          {text}
        </label>
      ) : null}
      <div
        className={classnames(
          "TextField__base flex items-center w-full",
          insetClass,
          color,
          focusColor,
          font,
          outline,
          radius,
          size,
          transition
        )}
      >
        {icon ? (
          <Icon
            className={classnames("ml-2", iconColor)}
            icon={icon}
            size={iconSize}
          />
        ) : null}
        {prefix ? (
          <div className={classnames(prefixClass)}>{prefix}</div>
        ) : null}
        <Input
          className={classnames(
            "appearance-none bg-none w-full self-stretch",
            align,
            font,
            lineHeight,
            outline,
            padding,
            placeholderColor
          )}
          readOnly={readonly}
          disabled={disabled}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          {...inputProps}
        ></Input>
        {suffix ? (
          <div className={classnames(suffixClass)}>{suffix}</div>
        ) : null}
        {props.adornText || props.adornIcon ? <Adorn {...adornProps} /> : null}
      </div>
      <Message size={size} focused={`${focused}`}>
        {children}
      </Message>
    </div>
  );
};
PickInput.displayName = "PickInput";

export default PickInput;
