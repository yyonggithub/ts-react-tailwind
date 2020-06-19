import React, {
  FC,
  CSSProperties,
  useState,
  useEffect,
  useRef,
  cloneElement,
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
  handleShow?: (s: boolean) => void;
  getTrigger: () => HTMLElement | null;
  placement: Placement;
  arrowSize?: number;
} & Partial<typeof defaultProps>;

const defaultProps = {
  hasMask: false,
};

const Overlay: FC<OverlayProps> = (props) => {
  const {
    children,
    hasMask,
    handleShow,
    getTrigger,
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
    const triggerNode = getTrigger();
    if (overlayNode && triggerNode && containerNode) {
      const pos = handlePosition(
        overlayNode,
        triggerNode,
        containerNode,
        placement,
        arrowSize
      );
      // console.log(pos);
      setPosition(pos);
      setDivStyle({
        position: "absolute",
        top: `${pos.offset.top}px`,
        left: `${pos.offset.left}px`,
        opacity: 1,
        transition: `opacity .2s ease-in-out`,
      });
    }
  };

  useEffect(() => {
    let ro: ResizeObserver | undefined = undefined;
    let triggerRo: ResizeObserver | undefined = undefined;
    if (containerRef.current) {
      ro = createObserver(containerRef.current, getPosition);
    }
    const triggerEle = getTrigger();
    if (triggerEle) {
      triggerRo = createObserver(triggerEle, getPosition);
    }
    return () => {
      ro?.disconnect();
      triggerRo?.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return createPortal(
    <>
      {hasMask ? (
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
      <div
        className="opacity-0"
        ref={overlayRef}
        style={divStyle}
        {...restProps}
      >
        <div className="inline-block">
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
      </div>
    </>,
    document.querySelector("body") as HTMLElement
  );
};

Overlay.defaultProps = defaultProps;
Overlay.displayName = "Overlay";

export default Overlay;
