import React, { FC, useContext } from "react";
import classnames from "classnames";
import { classnamesType } from "../../../interface";
import { DropdownContext } from "../dropdown";
import "./style.scss";

type DropdownContentProps = {
  className?: classnamesType;
} & Partial<typeof defaultProps>;

const defaultProps = {};

const DropdownContent: FC<DropdownContentProps> = (props) => {
  const { children, className, ...restProps } = props;
  const { isOpen, position } = useContext(DropdownContext);
  const classes = classnames(
    "Dropdown__content absolute dropdown-content",
    "w-auto bg-body border border-normal left-0 overflow-hidden rounded-md shadow-lg z-dropdown",
    className,
    `dropdown-content-${position}`
  );
  return isOpen ? (
    <ul className={classes} {...restProps}>
      {children}
    </ul>
  ) : null;
};

DropdownContent.defaultProps = defaultProps;
DropdownContent.displayName = "DropdownContent";

export default DropdownContent;
