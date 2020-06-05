import React, {
  FC,
  useContext,
  MouseEventHandler,
  useEffect,
  useRef,
} from "react";
import classnames from "classnames";
import { DropdownContext } from "../dropdown";

type DropdownTriggerProps = {
  className?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {};

const DropdownTrigger: FC<DropdownTriggerProps> = (props) => {
  const { className, children, ...restProps } = props;

  const {
    disabled,
    isOpen,
    handleOpen,
    handleSelect,
    handleRect,
    rect,
  } = useContext(DropdownContext);

  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (handleRect && triggerRef.current) {
      handleRect(triggerRef.current.getBoundingClientRect());
    }
  }, [handleRect, triggerRef]);

  const classes = classnames("Dropdown__trigger inline-block", className, {
    "cursor-pointer": !disabled,
    "cursor-not-allowed": disabled,
  });

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (disabled) return;
    if (handleOpen) {
      handleOpen(!isOpen);
    }
  };
  return (
    <div
      className={classes}
      {...restProps}
      onClick={handleClick}
      ref={triggerRef}
    >
      {children}
    </div>
  );
};

DropdownTrigger.defaultProps = defaultProps;
DropdownTrigger.displayName = "DropdownTrigger";

export default DropdownTrigger;
