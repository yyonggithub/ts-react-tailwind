import React, { FC, useContext, CSSProperties, useMemo } from "react";
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
  const { isOpen, position, rect } = useContext(DropdownContext);
  const classes = classnames(
    "Dropdown__content absolute dropdown-content",
    "w-auto bg-body border border-normal left-0 overflow-hidden rounded-md shadow-lg z-dropdown",
    className,
    `dropdown-content-${position}`
  );
  const offset = 5;

  const style = useMemo(() => {
    let style: CSSProperties;
    switch (position) {
      case "top":
        style = {
          top: `${-offset}px`,
        };
        break;
      case "right":
        style = {
          top: `0px`,
          left: `${rect?.width}px`,
          transform: `translateX(${offset}px)`,
        };
        break;
      case "left":
        style = {
          top: "0px",
          left: `-${offset}px`,
        };
        break;
      case "bottom":
        style = {
          // top: `${offset}px`,
          transform: `translateY(${offset}px)`,
        };
        break;
      default:
        style = {};
    }
    return style;
  }, [position, rect, offset]);
  return isOpen ? (
    <ul className={classes} style={style} {...restProps}>
      {children}
    </ul>
  ) : null;
};

DropdownContent.defaultProps = defaultProps;
DropdownContent.displayName = "DropdownContent";

export default DropdownContent;
