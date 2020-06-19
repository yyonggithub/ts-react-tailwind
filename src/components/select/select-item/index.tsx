import React, { FC, MouseEventHandler } from "react";
import classnames from "classnames";
import { classnamesType } from "../../../interface";
import useFocused from "../../../hooks/useFocused";

type SelectItemProps = {
  className?: classnamesType;
  value: string | number;
  ariaLabel?: string;
  text?: string;
  zIndex?: string;
  disabled?: boolean;
  focusColor?: string;
  disabledColor?: string;
  color?: string;
  route?: string;
  font?: string;
  iconClass?: string;
  icon?: string;
  textClass?: string;
  handleChange?: (value: string | number) => void;
  handleOpen?: () => void;
  currentValue?: string | number;
  onClick?: MouseEventHandler<HTMLLIElement>;
} & Partial<typeof defaultProps>;

const defaultProps = {
  align: "justify-start items-center",
  display: "flex",
  font: "text-sm",
  outline: "focus:outline-none",
  padding: "px-2",
  radius: "rounded",
  selectedColor: "bg-primary-opacity-1 text-primary",
  size: "h-8",
  tabindex: 0,
  transition: "transition ease-in-out duration-200",
};

const SelectItem: FC<SelectItemProps> = (props) => {
  const {
    value,
    children,
    className,
    text: _text,
    ariaLabel: _ariaLabel,
    zIndex: _zIndex,
    disabled: _disabled,
    focusColor: _focusColor,
    disabledColor: _disabledColor,
    selectedColor: _selectedColor,
    color: _color,
    route: _route,
    align,
    display,
    font,
    outline,
    padding,
    radius,
    size,
    tabindex,
    iconClass,
    icon: _icon,
    textClass,
    onClick,
    handleChange,
    handleOpen,
    currentValue,
    ...restProps
  } = props;

  const {
    focused,
    handleBlur,
    handleFocus,
    handleMouseEnter,
    handleMouseLeave,
  } = useFocused(props as any, false);

  // const { value: _value, handleChange, handleOpen } = useContext(SelectContext);

  const selected = value === currentValue;

  const ariaLabel = (() => _ariaLabel || _text || undefined)();

  const zIndex = (() => {
    if (typeof _zIndex === "string") return _zIndex;
    return focused ? "z-2" : undefined;
  })();

  const cursor = (() =>
    selected || _disabled ? "cursor_default" : "cursor-pointer")();

  const focusColor = (() => {
    if (typeof _focusColor === "boolean" && _focusColor === false)
      return undefined;

    return focused && !selected
      ? typeof _focusColor === "string"
        ? _focusColor
        : "bg-gray-1"
      : undefined;
  })();

  const disabledColor = (() => {
    return _disabled
      ? typeof _disabledColor === "string"
        ? _disabledColor
        : selected
        ? "text-primary-opacity-5 bg-primary-opacity-1"
        : "text-secondary"
      : undefined;
  })();

  const color = (() => {
    if (_disabled) {
      return disabledColor;
    } else if (selected) {
      return _selectedColor;
    } else if (typeof _color === "boolean" && _color === false) {
      return undefined;
    } else if (typeof _color === "string") {
      return _color;
    } else if (_color) {
      return _color;
    } else {
      return "hover:bg-gray-1 active:bg-gray-2";
    }
  })();

  const classes = classnames(
    "Select__item group",
    align,
    color,
    cursor,
    display,
    focusColor,
    font,
    outline,
    padding,
    radius,
    size,
    zIndex,
    className
  );

  const handleClick: MouseEventHandler<HTMLLIElement> = (e) => {
    if (handleChange && handleOpen) {
      handleChange(value);
      handleOpen();
    }
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <li
      aria-disabled={_disabled}
      aria-label={ariaLabel}
      className={classes}
      role={"link"}
      tabIndex={tabindex}
      onClick={handleClick}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...restProps}
    >
      {children}
    </li>
  );
};

SelectItem.defaultProps = defaultProps;
SelectItem.displayName = "SelectItem";

export default SelectItem;
