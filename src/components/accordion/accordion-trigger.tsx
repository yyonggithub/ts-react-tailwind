import React, { FC, useContext } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import { AccordionContext } from "./index";
import useFocused from "../../hooks/useFocused";
import Icon from "../icon";

type AccordionTriggerProps = {
  className?: classnamesType;
  triggerClass?: classnamesType;
  extendClass?: classnamesType;
  textClass?: classnamesType;
  ariaLabel?: string;
  color?: string;
  disabled?: boolean;
  disabledColor?: string;
  expanded?: boolean;
  focusColor?: string[];
  icon?: string;
  iconColor?: string[];
  iconMargin?: string;
  text?: string;
  zIndex?: string;
  radius?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  align: "justify-start items-center",
  display: "flex",
  extend: true,
  extendIcon: "glyph-triangle-down-12",
  extendSize: "12px",
  outline: "focus:outline-none",
  position: "relative",
  size: "h-8",
  transition: "transition ease-in-out duration-200",
  triggerAlign: "justify-start items-center",
  triggerDisplay: "flex",
  triggerFont: "text-sm font-medium",
  triggerLineHeight: "leading-5",
  triggerPadding: "px-4",
  triggerWidth: "w-full",
};

const AccordionTrigger: FC<AccordionTriggerProps> = (props) => {
  const {
    children,
    className,
    align,
    display,
    ariaLabel: _ariaLabel,
    text,
    zIndex: _zIndex,
    focusColor: _focusColor,
    disabledColor: _disabledColor,
    // disabled,
    color: _color,
    expanded,
    position,
    size,
    radius,
    triggerClass,
    outline,
    transition,
    triggerAlign,
    triggerDisplay,
    triggerFont,
    triggerLineHeight,
    triggerPadding,
    triggerWidth,
    extend,
    extendClass,
    extendIcon,
    extendSize,
    textClass,
    ...restProps
  } = props;
  const { show, disabled, handleShow } = useContext(AccordionContext);
  const {
    focused,
    handleBlur,
    handleFocus,
    handleMouseEnter,
    handleMouseLeave,
  } = useFocused(props as any, false);

  const ariaLabel = _ariaLabel || text || undefined;
  const zIndex = (() => {
    if (typeof _zIndex === "string") return _zIndex;
    return focused ? "z-2" : undefined;
  })();
  const cursor = disabled ? "cursor-default" : "cursor-pointer";
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
    if (typeof _focusColor === "string") return undefined;

    return focused
      ? "shadow-outline border-primary-divide"
      : "border-transparent";
  })();
  const disabledColor = (() => {
    if (typeof _disabledColor === "string") return _disabledColor;
    return "border border-transparent text-secondary";
  })();
  const color = (() => {
    if (disabled) return disabledColor;

    if (typeof _color === "string") return _color;

    return `border ${focusState} text-body hover:bg-gray-1 active:bg-gray-2 active:text-body-dark`;
  })();
  const extendOpacity = (() => {
    if (disabled) return "opacity-50";
    return expanded ? "opacity-100" : "opacity-50 group-hover:opacity-100";
  })();

  const handleClick = () => {
    console.log(show);

    if (handleShow) {
      handleShow(!show);
    }
  };

  return (
    <div
      className={classnames(
        "Accordion__trigger",
        radius,
        align,
        color,
        cursor,
        display,
        focusColor,
        outline,
        position,
        size,
        transition,
        zIndex
      )}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={disabled ? undefined : handleClick}
      {...restProps}
    >
      <button
        aria-disabled={disabled ? true : false}
        aria-label={ariaLabel}
        className={classnames(
          "group min-w-0 h-full",
          triggerClass,
          outline,
          transition,
          triggerAlign,
          triggerDisplay,
          triggerFont,
          triggerLineHeight,
          triggerPadding,
          triggerWidth
        )}
        disabled={disabled}
        type="button"
        tabIndex={0}
      >
        {extend && extendIcon ? (
          <Icon
            className={classnames(
              "Accordion__extend transform mr-2 -ml-1",
              extendClass,
              extendOpacity,
              { "rotate-180": show }
            )}
            icon={extendIcon}
            size={extendSize}
          />
        ) : null}
        {text ? (
          <span className={classnames("Accordion__text truncate", textClass)}>
            {text}
          </span>
        ) : null}
      </button>
      {children}
    </div>
  );
};

AccordionTrigger.defaultProps = defaultProps;
AccordionTrigger.displayName = "AccordionTrigger";

export default AccordionTrigger;
