import React, { FC } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";

type ColorPickerProps = {
  className: classnamesType;
} & Partial<typeof defaultProps>;

const defaultProps = {};

const ColorPicker: FC<ColorPickerProps> = (props) => {
  const { children, className, ...restProps } = props;
  const classes = classnames("Color_Pick", className);
  return <div className={classes}>{children}</div>;
};

ColorPicker.defaultProps = defaultProps;
ColorPicker.displayName = "ColorPicker";

export default ColorPicker;
