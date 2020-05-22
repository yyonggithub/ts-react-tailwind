import React, { SFC } from "react";
import { Overlay as BasicOverlay } from "react-overlays";
import "./style.scss";
import { Placement } from "react-overlays/cjs/usePopper";
import classnames from "classnames";
import { classnamesType } from "../../interface";

type TooltipProps = {
  overlayClass?: classnamesType;
  bodyClass?: classnamesType;
  show: boolean;
  placement: Placement;
  children?: any;
  target: any;
} & Partial<typeof defaultProps>;

const defaultProps = {
  arrowClass: "hidden",
  color: "bg-white text-body border border-normal shadow-xl",
  size: "py-2 px-3",
  font: "text-sm font-bold",
  radius: "rounded-none",
  text: "Here is the info!",
};

const Overlay: SFC<TooltipProps> = (props) => {
  const { show, placement, target } = props;

  const overlayClass = classnames(props.overlayClass);
  const bodyClass = classnames(
    props.radius,
    props.size,
    props.color,
    props.bodyClass
  );

  return (
    <BasicOverlay
      show={show}
      // rootClose
      // onHide={() => setShow(false)}
      placement={placement}
      target={target}
    >
      {({ props: overlayProps, arrowProps, placement }) => {
        return React.cloneElement(props.children, {
          overlayClass,
          bodyClass,
          props: overlayProps,
          arrowProps,
          placement,
        });
      }}
    </BasicOverlay>
  );
};
Overlay.defaultProps = defaultProps;

export default Overlay;
