import React, { FC, ReactNode, useState, useRef } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import { Placement } from "../overlay/utils";
import "./style.scss";
import Overlay from "../overlay";

type TooltipProps = {
  className?: classnamesType;
  render: () => ReactNode;
  offSize?: number;
} & Partial<typeof defaultProps>;

const defaultProps = {
  placement: "top" as Placement,
};

const Tooltip: FC<TooltipProps> = (props) => {
  const {
    children,
    className,
    render,
    placement,
    offSize,
    ...restProps
  } = props;

  const triggerRef = useRef<HTMLElement>(null);

  const [show, setShow] = useState(false);

  const getTrigger = () => {
    return triggerRef.current;
  };
  return (
    <>
      <span
        className={classnames(className)}
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
        ref={triggerRef}
        {...restProps}
      >
        {children}
      </span>
      {show ? (
        <Overlay
          placement={placement || "top"}
          getTrigger={getTrigger}
          arrowSize={offSize}
        >
          {render()}
        </Overlay>
      ) : null}
    </>
  );
};

Tooltip.defaultProps = defaultProps;
Tooltip.displayName = "Tooltip";

export default Tooltip;
