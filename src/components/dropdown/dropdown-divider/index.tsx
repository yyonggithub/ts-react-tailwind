import React, { FC } from "react";
import classnames from "classnames";
import { classnamesType } from "../../../interface";

type DropdownDividerProps = {
  className: classnamesType;
} & Partial<typeof defaultProps>;

const defaultProps = {};

const DropdownDivider: FC<DropdownDividerProps> = (props) => {
  const { children, className, ...restProps } = props;
  const classes = classnames("Dropdown__divider", className);
  return <div className={classes} {...restProps}></div>;
};

DropdownDivider.defaultProps = defaultProps;
DropdownDivider.displayName = "DropdownDivider";

export default DropdownDivider;
