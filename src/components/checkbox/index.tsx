import React, { forwardRef, InputHTMLAttributes } from "react";
import classnames from "classnames";
import Icon from "../icon";
import useFocused from "../../hooks/useFocused";

export type BaseProps = {
  className?: string;
  text?: string;
  name?: string;
  ariaLabel?: string;
  value?: string;
  color?: string;
  focusColor?: string;
  disabled?: boolean;
  disabledColor?: string;
  iconClass?: string;
  iconSize?: string;
  required?: boolean;
  checked?: boolean;
  iconText?: string;
} & Partial<typeof defaultProps>;

export const defaultProps = {
  align: "items-center",
  display: "inline-flex",
  outline: "focus:outline-none",
  truncate: "truncate",
  padding: "-mx-1 px-1",
  size: "min-h-6",
  radius: "rounded",
  transition: "transition ease-in-out duration-200",
};

type exclude = "value" | "size";

export interface Props
  extends BaseProps,
    Partial<typeof defaultProps>,
    Partial<Omit<InputHTMLAttributes<HTMLElement>, exclude>> {
  checkboxIcon?: string | boolean;
  // onChange?: (v: string, checked: boolean) => void;
}

const CheckBox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    focused,
    handleMouseLeave,
    handleMouseEnter,
    handleBlur,
    handleFocus,
  } = useFocused(props as any, false);

  const {
    className,
    checkboxIcon: _checkboxIcon,
    align,
    outline,
    padding,
    size,
    checked,
    children,
    // onChange,
    text: _text,
    transition,
    truncate,
    name,
    ariaLabel: _ariaLabel,
    value,
    color: _color,
    focusColor: _focusColor,
    display,
    disabled,
    disabledColor: _disabledColor,
    iconClass: _iconClass,
    iconSize,
    iconText,
    radius,
    required,
    ...restProps
  } = props;

  const ariaLabel = _ariaLabel || _text || undefined;
  const cursor = disabled ? "cursor-default" : "cursor-pointer";
  const checkboxIcon = (() => {
    if (
      _checkboxIcon &&
      Array.isArray(_checkboxIcon) &&
      _checkboxIcon.length === 2
    ) {
      return checked ? _checkboxIcon[0] : _checkboxIcon[1];
    } else {
      return checked ? "glyph-checkbox--checked-16" : "outline-checkbox-16";
    }
  })();

  const iconClass = (() => {
    if (disabled) return checked ? "text-gray-5" : "text-gray-3";
    if (typeof _iconClass === "string") return _iconClass;
    return checked || focused ? "text-primary" : "text-gray-5";
  })();
  const focusColor = (() => {
    if (typeof _focusColor === "boolean") return undefined;
    if (typeof _focusColor === "string" && focused) return _focusColor;
    return focused ? "shadow-outline" : undefined;
  })();
  const disabledColor =
    typeof _disabledColor === "string" ? _disabledColor : "text-gray-5";

  const color = (() => {
    if (disabled) return disabledColor;

    if (_color === undefined) return undefined;

    if (typeof _color === "string") return _color;

    return "hover:bg-gray-1";
  })();

  const classes = classnames(
    "Checkbox relative",
    className,
    align,
    color,
    cursor,
    display,
    outline,
    padding,
    radius,
    size,
    transition
  );

  const iconClassString = classnames(
    "Checkbox__icon rounded-sm",
    focusColor,
    iconClass,
    transition
  );

  const icon = checkboxIcon ? (
    <Icon className={iconClassString} icon={checkboxIcon} size={iconSize} />
  ) : null;

  const text = _text ? (
    <span
      className={classnames([
        "Checkbox__text leading-normal",
        iconText,
        truncate,
        { "ml-2": checkboxIcon },
      ])}
    >
      {_text}
    </span>
  ) : null;

  return (
    <label
      aria-checked={checked}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
      role="checkbox"
    >
      <input
        ref={ref}
        type="checkbox"
        className="absolute inset-y-0 left-0 w-full h-4 my-auto opacity-0 Checkbox__input pointer-events-none"
        disabled={disabled}
        name={name}
        required={required}
        value={value}
        checked={checked}
        // defaultChecked={checked}
        // onChange={this.onClick}
        // onClick={this.onClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...restProps}
      />
      {children}
      {icon}
      {text}
    </label>
  );
});

CheckBox.displayName = "Checkbox";
CheckBox.defaultProps = defaultProps;

export default CheckBox;
