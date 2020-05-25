import React, {
  ButtonHTMLAttributes,
  useMemo,
  forwardRef,
} from "react";
import classnames from "classnames";
import Icon from "../icon";
import { classnamesType } from "../../interface";
import useFocused from "../../hooks/useFocused";
import Loading from "../loading";

export type presetType =
  | "default"
  | "primary"
  | "secondary"
  | "danger"
  | "text";

interface BaseButtonProps extends Partial<typeof defaultProps> {
  className?: classnamesType;
  focusColor?: string[] | string;
  ariaLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  padding?: boolean | string;
  icon?: string;
  size?: string | boolean;
  preset?: presetType;
  color?: string;
  iconMargin?: string;
  iconColor?: string;
  isOpen?: boolean;
  extendIcon?: string;
  zIndex?: string;
  // [other: string]: any;
}

const defaultProps = {
  text: "",
  align: "justify-center items-center",
  display: "inline-flex",
  shrink: "flex-shrink-0",
  font: "text-sm font-medium",
  outline: "focus:outline-none",
  radius: "rounded-md",
  lineHeight: "leading-5",
  // extendIcon: '#outline-small-down-16',
  transition: "transition ease-in-out duration-200",
  disabledColor: "border border-transparent bg-gray-2 text-gray-6",
};

// type ButtonProps = BaseButtonProps & Partial<ButtonHTMLAttributes<HTMLElement>>;

interface ButtonProps
  extends Partial<BaseButtonProps & ButtonHTMLAttributes<HTMLElement>> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const focus = useFocused(props, false);
  const {
    focused,
    handleBlur,
    handleFocus,
    handleMouseLeave,
    handleMouseEnter,
  } = focus;

  const {
    ariaLabel: _ariaLabel,
    text: _text,
    zIndex: _zIndex,
    disabled: _disabled,
    loading: _loading,
    selected: _selected,
    padding: _padding,
    icon: _icon,
    size: _size,
    focusColor: _focusColor,
    preset: _preset,
    color: _color,
    disabledColor: _disabledColor,
    iconMargin: _iconMargin,
    iconColor: _iconColor,
    isOpen: _isOpen,
    className: _className,
    align: _align,
    display: _display,
    font: _font,
    lineHeight: _lineHeight,
    outline: _outline,
    radius: _radius,
    shrink: _shrink,
    transition: _transition,
    extendIcon: _extendIcon,
    children,
    ...restProps
  } = props;
  const ariaLabel = _ariaLabel || _text || undefined;
  const zIndex = focused ? (_zIndex ? _zIndex : "z-2") : undefined;

  const cursor = useMemo(() => {
    if (_loading) {
      return "cursor-wait";
    }
    if (_selected || _disabled) {
      return "cursor-default";
    }
    return "cursor-pointer";
  }, [_loading, _selected, _display]);

  const padding = useMemo(() => {
    if (typeof _padding === "boolean" && _padding === false) {
      return undefined;
    }
    if (typeof _padding === "string") {
      return _padding;
    }
    return _icon && !_text ? undefined : "px-4";
  }, [_padding, _icon, _text]);

  const size = useMemo(() => {
    if (typeof _size === "boolean" && _size === false) {
      return undefined;
    }
    if (typeof _size === "string") {
      return _size;
    }
    return _icon && !_text ? "h-8 w-8" : "h-8";
  }, [_size, _icon, _text]);

  const focusColor = useMemo(() => {
    if (typeof _focusColor === "string")
      return focused ? _focusColor : undefined;

    if (typeof _focusColor === "undefined" || _focusColor.length > 2)
      return undefined;

    if (_focusColor && _focusColor.length === 2) {
      return focused ? _focusColor[0] : _focusColor[1];
    } else if (_focusColor && _focusColor.length === 1) {
      return focused ? _focusColor[0] : undefined;
    } else {
      return undefined;
    }
  }, [_focusColor, focused]);

  const focusState = useMemo(() => {
    switch (_preset) {
      case "primary":
        return focused
          ? "shadow-outline border-primary-dark"
          : "border-transparent";
      case "secondary":
        return focused
          ? "shadow-outline border-primary-opacity-3"
          : "border-transparent";
      case "danger":
        return focused
          ? "shadow-outline-danger border-danger-dark"
          : "border-transparent";
      default:
        return focused
          ? "shadow-outline border-primary-opacity-4"
          : "border-normal";
    }
  }, [_preset, focused]);

  const color = useMemo(() => {
    if (_disabled) return _disabledColor;
    if (typeof _color === "string" && _color !== "") return _color;
    switch (_preset) {
      case "text":
        return `${focusState} text-body hover:bg-gray-1 active:bg-gray-2 active:text-body-dark`;
      case "primary":
        return `border ${focusState} text-white bg-primary hover:bg-primary-bright active:bg-primary-dark`;
      case "secondary":
        return `border ${focusState} text-primary bg-primary-opacity-1 hover:bg-primary-opacity-05`;
      case "danger":
        return `border ${focusState} text-white bg-danger hover:bg-danger-bright active:bg-danger-dark`;
      default:
        return `border ${focusState} text-body bg-body hover:text-body-bright active:text-body-dark active:bg-gray-1`;
    }
  }, [_preset, _disabled, _color, focusState]);

  const iconMargin = useMemo(() => {
    if (_iconMargin) return _iconMargin;
    return _text ? "-ml-1 mr-2" : undefined;
  }, [_text, _iconMargin]);

  const iconColor = useMemo(() => {
    if (_iconColor) return _iconColor;
    if (_preset === "text") return "text-secondary group-hover:text-body";
    return undefined;
  }, [_preset, _iconColor]);

  const extendOpacity = useMemo(() => {
    if (_disabled) return "opacity-50";
    return _isOpen ? "opacity-100" : "opacity-50 group-hover:opacity-100";
  }, [_disabled, _isOpen]);

  const classes = useMemo(() => {
    return classnames(
      "Button relative group min-w-0 max-w-full",
      _className,
      _align,
      color,
      cursor,
      _display,
      focusColor,
      _font,
      _lineHeight,
      _outline,
      padding,
      _radius,
      _shrink,
      size,
      _transition,
      zIndex
    );
  }, [
    _className,
    _align,
    color,
    cursor,
    _display,
    focusColor,
    _font,
    _lineHeight,
    _outline,
    padding,
    _radius,
    _shrink,
    size,
    _transition,
    zIndex,
  ]);

  let styles = {};
  if (_loading) {
    styles = {
      visibility: "hidden",
    };
  }
  const loading = _loading ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <Loading.Dot color={"text-current"} />
    </div>
  ) : null;
  const iconClass = classnames([
    "Button__icon",
    iconColor,
    iconMargin,
    { invisible: _loading },
  ]);
  const textClass = classnames([
    "Button__text truncate flex-grow",
    { invisible: _loading },
  ]);
  const icon = _icon ? (
    <Icon className={iconClass} icon={_icon} style={styles} />
  ) : null;
  const text = _text ? (
    <span className={textClass} style={styles}>
      {_text}
    </span>
  ) : null;
  const extendClass = classnames([
    "Button__extend transform ml-2 -mr-1",
    extendOpacity,
    { invisible: _extendIcon },
  ]);
  const extend = _extendIcon ? (
    <Icon icon={_extendIcon} className={extendClass} style={styles} />
  ) : null;

  return (
    <button
      aria-disabled={_disabled}
      aria-label={ariaLabel}
      aria-busy={_loading}
      className={classes}
      disabled={_disabled}
      type="button"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={ref}
      {...restProps}
    >
      {loading}
      {icon}
      {children}
      {text}
      {extend}
    </button>
  );
});

Button.defaultProps = defaultProps;
Button.displayName = "Button";

export default Button;
