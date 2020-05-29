import React, { FC } from "react";
import classnames from "classnames";
import { PickInputProps } from "./pick-input";
import Icon from "../icon";
import Message from "./sub/message";

const PickTextArea: FC<PickInputProps> = (props) => {
  const {
    ariaLabel,
    zIndex,
    // className,
    // margin,
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
    iconMargin,
    // prefix,
    // prefixClass,
    align,
    lineHeight,
    padding,
    placeholderColor,
    readonly,
    disabled,
    placeholder,
    handleBlur,
    handleFocus,
    // suffix,
    // suffixClass,
    focused,
    children,
    inputProps,
    // adornProps,
  } = props;
  return (
    <div
      aria-label={ariaLabel}
      className={classnames("max-w-full min-w-0 TextArea", zIndex)}
    >
      {text ? (
        <label className={classnames(labelClass, labelDisplay, labelMargin)}>
          {text}
        </label>
      ) : null}
      <div
        className={classnames(
          "TextArea__base flex items-start w-full",
          insetClass,
          color,
          focusColor,
          font,
          outline,
          radius,
          transition
        )}
      >
        {icon ? (
          <Icon
            className={classnames("ml-2", iconColor, iconMargin)}
            icon={icon}
            size={iconSize}
          />
        ) : null}
        <textarea
          className={classnames(
            "appearance-none bg-none w-full self-stretch rounded-inherit",
            align,
            font,
            lineHeight,
            outline,
            padding,
            placeholderColor,
            size
          )}
          readOnly={readonly}
          disabled={disabled}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...inputProps}
        ></textarea>
      </div>
      <Message size={size} focused={`${focused}`}>
        {children}
      </Message>
    </div>
  );
};
PickTextArea.displayName = "PickTextArea";

export default PickTextArea;
