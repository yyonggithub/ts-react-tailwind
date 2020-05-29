import React, { FC, useContext } from "react";
import classnames from "classnames";
import DropdownContext from "react-overlays/cjs/DropdownContext";

type DropdownTriggerProps = {
  className?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {};

const DropdownTrigger: FC<DropdownTriggerProps> = (props) => {
  const { className, children, ...restProps } = props;

  const context = useContext(DropdownContext);

  const classes = classnames("Dropdown__trigger", className);
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

DropdownTrigger.defaultProps = defaultProps;
DropdownTrigger.displayName = "DropdownTrigger";

export default DropdownTrigger;
