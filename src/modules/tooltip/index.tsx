import React, { Fragment, useState, useRef, Ref } from "react";
import DocGroup from "../../components/doc-group";
import Button from "../../components/button";
import Overlay from "../../components/tooltip/overlay";
import TooltipItem from "../../components/tooltip/tooltip-item";
import { Placement } from "react-overlays/cjs/usePopper";
import { classnamesType } from "../../interface";

const TooltipSide = (props: {
  isClick?: boolean;
  placement?: Placement;
  delay?: number;
  duration?: number;
  bodyClass?: classnamesType;
  overlayClass?: classnamesType;
}) => {
  const placement = props.placement || "top";
  const [show, setShow] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  function onMouseLeave() {
    setShow(false);
  }
  function onMouseOver() {
    const delay = props.delay || 0;
    setTimeout(() => {
      setShow(true);
      const { duration } = props;
      if (duration) {
        setTimeout(() => {
          setShow(false);
        }, duration);
      }
    }, delay);
  }
  function onClick() {
    setShow(!show);
  }
  return (
    <div>
      <Button
        ref={triggerRef}
        onMouseLeave={props.isClick ? undefined : onMouseLeave}
        onMouseOver={props.isClick ? undefined : onMouseOver}
        onClick={props.isClick ? onClick : undefined}
      >
        {placement}
      </Button>
      <Overlay
        show={show}
        placement={placement}
        target={triggerRef}
        bodyClass={props.bodyClass}
        overlayClass={props.overlayClass}
      >
        <TooltipItem>hello world!!!</TooltipItem>
      </Overlay>
    </div>
  );
};

const TooltipModule = () => {
  const placement = "bottom";
  const [show, setShow] = useState(false);
  const triggerRef = useRef(null);
  function onClick() {
    setShow(!show);
  }
  return (
    <Fragment>
      <DocGroup name="default">
        <div>
          <Button onClick={onClick} ref={triggerRef}>
            按钮
          </Button>
          <Overlay show={show} placement={placement} target={triggerRef}>
            <TooltipItem>hello world!!!</TooltipItem>
          </Overlay>
        </div>
      </DocGroup>
      <DocGroup name="side">
        <TooltipSide placement={"top"} />
        <TooltipSide placement={"right"} />
        <TooltipSide placement={"left"} />
        <TooltipSide placement={"bottom"} />
      </DocGroup>
      <DocGroup name="delay">
        <TooltipSide delay={1000} />
      </DocGroup>
      <DocGroup name="duration">
        <TooltipSide duration={1000} />
      </DocGroup>
      {
        // TODO: 样式未实现
      }
      <DocGroup name="style">
        <TooltipSide
          bodyClass={"text-primary bg-primary-opacity-1"}
          isClick={true}
        />
      </DocGroup>
    </Fragment>
  );
};

export default TooltipModule;
