import React, { FC, MouseEvent, useState } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import { TextFieldProps } from "../input/text-field";
import Button from "../button";
import useFocused from "../../hooks/useFocused";
import handleProps from "../input/handleProps";
import Icon from "../icon";
import Input from "../input/input";
import Adorn from "../input/sub/adorn";

type SpinningType = "increase" | "decrease";

type SpinnerProps = {
  // mergeGroupMargin?: string;
  // mergeGroupSize?: string;
  name?: string;
  max?: number;
  min?: number;
  step?: number;
  decreaseIcon?: string;
  // display?: string;
  // iconSize?: number;
  increaseIcon?: string;
  // layout?: string;
  mergeGroupColor?: boolean | string;
  mergeGroupFocusColor?: boolean | string;
  splitButtonColor?: string;
  decreasingDisabled?: boolean;
  mergeGroupClass?: string;
  mergeButtonDisabledColor?: string;
  onUpdate?: (value: number, type?: SpinningType) => void;
  // radius?: number;
} & Partial<typeof defaultProps> &
  Partial<TextFieldProps>;

const defaultProps = {
  display: "inline-block",
  layout: "merge",
  shrink: "flex-shrink-0",
  type: "number",
  mergeButtonColor: "hover:bg-gray-1 active:bg-gray-2",
  mergeButtonDecreaseIcon: "glyph-triangle-down-6",
  mergeButtonFocusColor: "bg-gray-1",
  mergeButtonIconSize: "6px",
  mergeButtonIncreaseIcon: "glyph-triangle-up-6",
  mergeGroupMargin: "ml-2",
  mergeGroupRadius: "rounded-sm",
  mergeGroupSize: "w-4 h-full",
  splitDecreasingRadius: "rounded-l",
  splitIncreasingRadius: "rounded-r",
};

// TODO: 废弃，暂做列子

const Spinner: FC<SpinnerProps> = (props) => {
  // const {
  //   text,
  //   children,
  //   className,
  //   radius: _radius,
  //   layout,
  //   mergeGroupColor: _mergeGroupColor,
  //   mergeGroupFocusColor: _mergeGroupFocusColor,
  //   color,
  //   disabled,
  //   focusColor,
  //   max: _max,
  //   min: _min,
  //   step: _step,
  //   ariaLabel,
  //   size,
  //   insetClass,
  //   labelClass,
  //   labelDisplay,
  //   labelMargin,
  //   margin,
  //   shrink,
  //   readonly,
  //   splitButtonColor,
  //   decreasingDisabled,
  //   splitDecreasingRadius,
  //   font,
  //   outline,
  //   transition,
  //   ...restProps
  // } = props;

  const {
    name,
    type,
    value: _value,
    layout,
    mergeGroupColor: _mergeGroupColor,
    mergeGroupFocusColor: _mergeGroupFocusColor,
    max: _max,
    min: _min,
    step: _step,
    shrink,
    splitButtonColor,
    decreasingDisabled: _decreasingDisabled,
    splitIncreasingRadius,
    splitDecreasingRadius,
    adornText,
    adornIcon,
    mergeGroupClass,
    // mergeGroupColor,
    // mergeGroupFocusColor,
    mergeGroupMargin,
    mergeGroupRadius,
    mergeGroupSize,
    mergeButtonColor,
    mergeButtonDisabledColor,
    mergeButtonFocusColor,
    mergeButtonIncreaseIcon,
    mergeButtonIconSize,
    mergeButtonDecreaseIcon,
  } = props;

  const { focused, handleBlur, handleFocus } = useFocused(props as any, false);

  const {
    radius: _radius,
    // layout,
    // mergeGroupColor: _mergeGroupColor,
    // mergeGroupFocusColor: _mergeGroupFocusColor,
    // max: _max,
    // min: _min,
    // step: _step,
    // shrink,
    // splitButtonColor,
    // decreasingDisabled,
    // splitDecreasingRadius,
    ariaLabel,
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
    suffix,
    suffixClass,
    children,
    inputProps,
    adornProps,
  } = handleProps(props, focused);

  const radius = (() => {
    if (typeof _radius === "string") return _radius;
    return layout === "split" ? "rounded-none" : "rounded";
  })();
  const mergeGroupColor = (() => {
    if (disabled) return undefined;
    if (_mergeGroupColor === false) return undefined;
    if (typeof focusColor === "undefined") return "border border-normal";
    return typeof color === "string" ? `${color} ${focusColor[1]}` : undefined;
  })();
  const mergeGroupFocusColor = (() => {
    if (_mergeGroupFocusColor === false) return undefined;
    if (typeof _mergeGroupFocusColor === "string") return _mergeGroupFocusColor;
    return "focus-within:shadow-outline focus-within:border-primary-divide";
  })();

  const parseExtremeValue = (trait: "max" | "min", value: unknown) => {
    value = Number(value);
    const { POSITIVE_INFINITY, NEGATIVE_INFINITY } = Number;
    if (typeof value === "number") {
      return value;
    } else {
      return trait === "max" ? POSITIVE_INFINITY : NEGATIVE_INFINITY;
    }
  };
  const max = parseExtremeValue("max", _max);
  const min = parseExtremeValue("max", _min);

  const step = _step ? _step : 1;

  const zIndex = focused ? "z-2" : undefined;

  const [value, setValue] = useState(_value || 0);
  const handleUpdateValue = () => {
    // TODO:
  };

  const isSpinnerRunning = false;

  const increasingDisabled = !isSpinnerRunning && Number(value) >= max;
  const decreasingDisabled = !isSpinnerRunning && Number(value) <= min;
  return (
    <div
      aria-label={ariaLabel}
      className={classnames(
        "flex items-center flex-grow",
        margin,
        className,
        shrink
      )}
    >
      {text ? (
        <label className={classnames(labelClass, labelDisplay, labelMargin)}>
          {text}
        </label>
      ) : null}
      <div
        className={classnames("flex items-center flex-grow", insetClass, size)}
      >
        {readonly ? null : layout === "split" ? (
          <Button
            className="-mr-px Spinner__button--decrease"
            color={splitButtonColor}
            disabled={decreasingDisabled || disabled}
            disabledColor="text-secondary border border-normal"
            focusColor={focusColor}
            icon="outline-decrease-16"
            padding={false}
            radius={splitDecreasingRadius}
            onClick={() => {
              handleUpdateValue();
            }}
          ></Button>
        ) : null}
        <div
          className={classnames(
            "TextField__base flex-grow flex items-center h-full",
            color,
            focusColor,
            font,
            outline,
            radius,
            transition,
            zIndex
          )}
        >
          {icon ? (
            <Icon className={classnames("ml-2", iconColor)} icon={icon} />
          ) : null}
          {prefix ? (
            <div className={classnames(prefixClass)}>{prefix}</div>
          ) : null}
          <Input
            className={classnames(
              "TextField__input appearance-none bg-none w-full h-full",
              align,
              outline,
              padding,
              placeholderColor
            )}
            disabled={disabled}
            // id={{id}}
            max={max.toString()}
            min={min.toString()}
            name={name}
            placeholder={placeholder}
            // preSelected={preSelected}
            readOnly={readonly}
            // required={required}
            step={step}
            type={type}
            value={value}
            onChange={() => {}}
          />
          {suffix ? (
            <div className={classnames(suffixClass)}>{suffix}</div>
          ) : null}
          {adornText || adornIcon ? <Adorn {...adornProps} /> : null}
        </div>
        {layout === "split" ? (
          <Button
            className="-ml-px Spinner__button--increase"
            color={splitButtonColor}
            disabled={increasingDisabled || disabled}
            disabledColor="text-secondary border border-normal"
            focusColor={focusColor}
            icon="outline-increase-16"
            padding={false}
            radius={splitIncreasingRadius}
          />
        ) : null}
        {layout === "marge" ? (
          <div
            className={classnames(
              "Spinner__buttonGroup flex flex-col overflow-hidden flex-shrink-0",
              mergeGroupClass,
              mergeGroupColor,
              mergeGroupFocusColor,
              mergeGroupMargin,
              mergeGroupRadius,
              mergeGroupSize,
              transition
            )}
          >
            <Button
              className="flex-grow Spinner__button--increase"
              color={mergeButtonColor}
              disabled={increasingDisabled || disabled}
              disabledColor={mergeButtonDisabledColor}
              focusColor={mergeButtonFocusColor}
              icon={mergeButtonIncreaseIcon}
              iconSize={mergeButtonIconSize}
              padding={false}
              radius={"false"}
              size="h-5/10"
              onClick={() => {}}
            />
            <Button
              className="flex-grow Spinner__button--decrease"
              color={mergeButtonColor}
              disabled={decreasingDisabled || disabled}
              disabledColor={mergeButtonDisabledColor}
              focusColor={mergeButtonFocusColor}
              icon={mergeButtonDecreaseIcon}
              iconSize={mergeButtonIconSize}
              padding={false}
              radius={"false"}
              size="h-5/10"
            />
          </div>
        ) : null}
      </div>
      {children}
    </div>
  );
};

Spinner.defaultProps = defaultProps;
Spinner.displayName = "Spinner";

export default Spinner;
