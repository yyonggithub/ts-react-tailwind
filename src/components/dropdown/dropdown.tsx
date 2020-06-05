import React, { FC, createContext, useState } from "react";
import classnames from "classnames";

type Position = "top" | "right" | "bottom" | "left";

type DropdownProps = {
  className?: string;
  defaultIndex?: number;
  disabled?: boolean;
  // position?: Position;
  calculatePosition?: string;
  horizontalPosition?: string;
  initiallyOpened?: boolean;
  matchTriggerWidth?: string;
  opened: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  preventScroll?: string;
  renderInPlace?: string;
  verticalPosition?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  display: "inline-block",
  position: "bottom",
};

interface IDropdownContext {
  disabled?: boolean;
  position?: string;
  index?: number;
  rect?: DOMRect;
  handleSelect?: (selected: number) => void;
  handleOpen?: (open: boolean) => void;
  handleRect?: (rect: DOMRect) => void;
  isOpen?: boolean;
  triggerRef?: any;
}

export const DropdownContext = createContext<IDropdownContext>({
  index: undefined,
  isOpen: false,
});

const Dropdown: FC<DropdownProps> = (props) => {
  const {
    children,
    className,
    display,
    defaultIndex,
    disabled,
    opened,
    position,
    ...restProps
  } = props;

  const [currentActive, setActive] = useState(defaultIndex);
  const [isOpen, setOpen] = useState(opened);
  const [rect, setRect] = useState<DOMRect | undefined>();

  const classes = classnames(
    "Dropdown relative inline-block",
    className,
    display
  );

  const handleSelect = (index: number) => {
    setActive(index);
  };
  const handleOpen = (open: boolean) => {
    setOpen(open);
  };
  const handleRect = (rect: DOMRect) => {
    setRect(rect);
  };
  const passedContext: IDropdownContext = {
    index: typeof currentActive !== "undefined" ? currentActive : undefined,
    disabled,
    position,
    isOpen,
    rect,
    handleOpen,
    handleSelect,
    handleRect,
  };
  return (
    <div className={classes}>
      <DropdownContext.Provider value={passedContext}>
        {children}
      </DropdownContext.Provider>
    </div>
  );
};

Dropdown.defaultProps = defaultProps;
Dropdown.displayName = "Dropdown";

export default Dropdown;
