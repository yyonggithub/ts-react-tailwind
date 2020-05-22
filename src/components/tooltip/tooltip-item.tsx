import React from "react";
import classnames from "classnames";

const TooltipItem = ({
  overlayClass,
  bodyClass,
  props: overlayProps,
  arrowProps,
  placement,
  children,
}: any) => (
  <div
    className={classnames("_tooltip", placement, overlayClass)}
    ref={overlayProps.ref}
    style={overlayProps.style}
    aria-labelledby={overlayProps["aria-labelledby"]}
  >
    <div
      className={classnames("_arrow", placement)}
      ref={arrowProps.ref}
      style={arrowProps.style}
    ></div>
    <div className={classnames("_body", bodyClass)}>{children}</div>
  </div>
);

export default TooltipItem;
