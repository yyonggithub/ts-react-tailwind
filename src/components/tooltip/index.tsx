import React, { FC, ReactNode, useState, useRef } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import { Placement } from "../overlay/utils";
import "./style.scss";
import Overlay from "../overlay";

type TooltipProps = {
  className?: classnamesType;
  render: () => ReactNode;
} & Partial<typeof defaultProps>;

const defaultProps = {
  placement: "top" as Placement,
};

const Tooltip: FC<TooltipProps> = (props) => {
  const { children, className, render, placement, ...restProps } = props;

  const triggerRef = useRef<HTMLElement>(null);
  const [show, setShow] = useState(false);

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
      {
        <Overlay
          show={show}
          placement={placement || 'top'}
          triggerRef={triggerRef}
        >
          {render()}
        </Overlay>
      }
    </>
  );
};

Tooltip.defaultProps = defaultProps;
Tooltip.displayName = "Tooltip";

export default Tooltip;

