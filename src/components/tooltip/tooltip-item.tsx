import React, { FC, useRef, useState, useEffect } from "react";
import classnames from "classnames";
import { Placement, createObserver } from "../overlay/utils";
import { IPosition } from "../overlay";
import { classnamesType } from "../../interface";

type TooltipProps = {
  className?: classnamesType;
  placement?: Placement;
  position?: IPosition;
} & Partial<typeof defaultProps>;

const defaultProps = {
  arrow: true,
  offset: 5,
};

interface IArrowStyle {
  top?: number;
  left?: number;
  right?: number;
}

function getArrowStyle(
  placement: string | undefined,
  offset: number | undefined,
  arrowSize: number,
  rect: DOMRect
) {
  let style: IArrowStyle = {};
  switch (placement) {
    case "top-start":
      style.left = Number(offset) + arrowSize;
      break;
    case "top":
      style.left = rect.width / 2 - arrowSize;
      break;
    case "top-end":
      style.right = Number(offset) + arrowSize;
      break;
    case "bottom-start":
      style.left = Number(offset) + arrowSize;
      break;
    case "bottom":
      style.left = rect.width / 2 - arrowSize;
      break;
    case "bottom-end":
      style.right = Number(offset) + arrowSize;
      break;
    case "left-start":
      style.top = rect.height / 2 - arrowSize;
      break;
    case "left":
      style.top = rect.height / 2 - arrowSize;
      break;
    case "left-end":
      style.top = rect.height / 2 - arrowSize;
      break;
    case "right-start":
      style.top = rect.height / 2 - arrowSize;
      break;
    case "right":
      style.top = rect.height / 2 - arrowSize;
      break;
    case "right-end":
      style.top = rect.height / 2 - arrowSize;
      break;
    default:
      break;
  }
  return style;
}

const TooltipItem: FC<TooltipProps> = (props) => {
  const {
    children,
    placement,
    className,
    position,
    arrow,
    offset,
    ...restProps
  } = props;
  const itemRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<IArrowStyle>({});
  const arrowSize = 5;
  const getComputedStyle = () => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      let style: IArrowStyle = getArrowStyle(
        placement,
        offset,
        arrowSize,
        rect
      );
      setStyle(style);
      // console.log(rect);
    }
  };

  useEffect(() => {
    let ro: ResizeObserver;
    if (itemRef.current) {
      ro = createObserver(itemRef.current, getComputedStyle);
    }
    return () => {
      ro.disconnect();
    };
  }, []);
  return (
    <div
      className={classnames("_tooltip", placement)}
      // style={overlayProps.style}
      // aria-labelledby={overlayProps["aria-labelledby"]}
      ref={itemRef}
      {...restProps}
    >
      {arrow ? (
        <div className={classnames("_arrow", placement)} style={style}></div>
      ) : null}
      <div className={classnames("_body")}>{children}</div>
    </div>
  );
};
TooltipItem.defaultProps = defaultProps;
TooltipItem.displayName = "TooltipItem";

export default TooltipItem;
