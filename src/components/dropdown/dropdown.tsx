import React, { FC, createContext, useState } from "react";
import classnames from "classnames";

type DropdownProps = {
  className?: string;
  defaultIndex?: number;
  disabled?: boolean;
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
};

interface IDropdownContext {
  index?: number;
  handleSelect?: (selected: number) => void;
  handleOpen?: (open: boolean) => void;
  isOpen?: boolean;
}

export const DropdownContext = createContext<IDropdownContext>({
  index: undefined,
  isOpen: false,
});

const Dropdown: FC<DropdownProps> = (props) => {
  const { children, className, display, defaultIndex, opened } = props;

  const [currentActive, setActive] = useState(defaultIndex);
  const [isOpen, setOpen] = useState(opened);

  const classes = classnames("Dropdown", className, display);

  const handleSelect = (index: number) => {
    setActive(index);
  };
  const handleOpen = (open: boolean) => {
    setOpen(open);
  };
  const passedContext: IDropdownContext = {
    index: typeof currentActive !== "undefined" ? currentActive : undefined,
    isOpen,
    handleOpen,
    handleSelect,
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
