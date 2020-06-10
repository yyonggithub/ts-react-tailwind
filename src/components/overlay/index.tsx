import React, {
  FC,
  CSSProperties,
  useState,
  useEffect,
  useRef,
  cloneElement,
  RefObject,
  isValidElement,
} from "react";
import { createPortal } from "react-dom";
import { createObserver, handlePosition, Placement } from "./utils";

export type IPosition = {
  offset: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  rect: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
};

type OverlayProps = {
  show: boolean;
  handleShow?: (s: boolean) => void;
  triggerRef: RefObject<HTMLElement>;
  placement: Placement;
  arrowSize?: number;
} & Partial<typeof defaultProps>;

const defaultProps = {
  hasOverlay: false,
};

const Overlay: FC<OverlayProps> = (props) => {
  const {
    children,
    hasOverlay,
    show,
    handleShow,
    triggerRef,
    placement,
    arrowSize,
    ...restProps
  } = props;

  const [position, setPosition] = useState<IPosition | undefined>();
  const [divStyle, setDivStyle] = useState<CSSProperties>({});
  const containerRef = useRef<HTMLElement>(document.querySelector("body"));
  const overlayRef = useRef<HTMLDivElement>(null);
  const getPosition = () => {
    const containerNode = containerRef.current;
    const overlayNode = overlayRef.current;
    const triggerNode = triggerRef?.current;
    if (overlayNode && triggerNode && containerNode) {
      const pos = handlePosition(
        overlayNode,
        triggerNode,
        containerNode,
        placement,
        arrowSize
      );
      console.log(pos);
      setPosition(pos);
      setDivStyle({
        position: "absolute",
        top: `${pos.offset.top}px`,
        left: `${pos.offset.left}px`,
        // color: "red",
      });
    }
  };
  useEffect(() => {
    let ro: ResizeObserver | undefined = undefined;
    if (containerRef.current) {
      ro = createObserver(containerRef.current, getPosition);
    }
    return () => ro?.disconnect();
  }, []);

  return show
    ? createPortal(
        <>
          {hasOverlay ? (
            <div
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
              }}
              onClick={() => {
                if (handleShow) {
                  handleShow(false);
                }
              }}
            ></div>
          ) : null}
          <div ref={overlayRef} style={divStyle} {...restProps}>
            {React.Children.map(children, (child) => {
              if (isValidElement(child)) {
                return cloneElement(child, {
                  placement,
                  position,
                });
              }
              return child;
            })}
          </div>
        </>,
        document.querySelector("body") as HTMLElement
      )
    : null;
};

Overlay.defaultProps = defaultProps;
Overlay.displayName = "Overlay";

export default Overlay;
