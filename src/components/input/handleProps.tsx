import { TextFieldProps } from "./text-field";
import { getAdornProps } from "./sub/adorn";

export default function handleProps(props: TextFieldProps, focused: boolean) {
  const {
    className,
    children,
    ariaLabel: _ariaLabel,
    align,
    lineHeight,
    padding,
    placeholderColor,
    text,
    placeholder,
    focusColor: _focusColor,
    readonly,
    disabledColor: _disabledColor,
    color: _color,
    disabled,
    iconColor: _iconColor,
    iconFocusColor: _iconFocusColor,
    margin,
    labelClass,
    labelDisplay,
    labelMargin,
    insetClass,
    font,
    outline,
    radius,
    size,
    transition,
    icon,
    iconSize,
    prefix,
    prefixClass,
    autoComplete,
    suffix,
    suffixClass,
    ...restProps
  } = props;

  const ariaLabel = _ariaLabel || text || placeholder || undefined;
  const zIndex = focused ? "z-2" : undefined;

  const focusColor = (() => {
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
  })();

  const focusState = (() => {
    if (readonly)
      return focused ? "border-normal shadow-outline-gray" : "border-normal";

    return focused
      ? "shadow-outline border-primary"
      : "border-normal hover:border-dark";
  })();

  const disabledColor =
    typeof _disabledColor === "string"
      ? _disabledColor
      : "border border-transparent bg-gray-2 text-gray-6";

  const color = (() => {
    if (disabled) return disabledColor;

    if (typeof _color === "string") return _color;

    return `${focusState} border`;
  })();

  const iconColor = (() => {
    if (disabled) return "text-gray-4";

    if (typeof _iconColor === "string" || typeof _iconFocusColor === "string")
      return focused ? _iconFocusColor : _iconColor;

    return focused ? "text-primary" : "text-gray-5";
  })();

  const adornProps = getAdornProps(restProps);

  const filterAdornProps = (props: any) => {
    const keys = Object.keys(props);
    const adornKeys = keys.filter((item) => /^adorn/i.test(item));
    adornKeys.forEach((key) => {
      delete props[key];
    });
    return props;
  };

  const inputProps = filterAdornProps(restProps);

  return {
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
    // handleBlur,
    // handleFocus,
    suffix,
    suffixClass,
    // focused,
    children,
    inputProps,
    adornProps,
  };
}
