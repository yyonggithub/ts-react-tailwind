import React, { FC, useRef } from "react";
import classnames from "classnames";
import { Placement } from "../overlay/utils";
import { IPosition } from "../overlay";
import { classnamesType } from "../../interface";

type TooltipProps = {
  className?: classnamesType;
  placement?: Placement;
  position?: IPosition;
};

const TooltipItem: FC<TooltipProps> = (props) => {
  const { children, placement, className, position, ...restProps } = props;
  const itemRef = useRef<HTMLDivElement>(null);
  // const { offset, rect } = position;
  // const arrowStyle = {
  //   top: 0,
  //   left: 0,
  // };
  if (itemRef.current) {
    const div = itemRef.current;
    const rect = div.getBoundingClientRect();
  }
  return (
    <div
      className={classnames("_tooltip", placement)}
      // style={overlayProps.style}
      // aria-labelledby={overlayProps["aria-labelledby"]}
      ref={itemRef}
    >
      <div className={classnames("_arrow", placement)}></div>
      <div className={classnames("_body")}>{children}</div>
    </div>
  );
};
export default TooltipItem;
