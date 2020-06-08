import React, {
  FC,
  createContext,
  useState,
  useRef,
  useEffect,
  MouseEvent,
} from "react";
import classnames from "classnames";
import DropdownTrigger from "./dropdown-trigger";
import DropdownDivider from "./dropdown-divider";
import DropdownItem from "./dropdown-item";
import DropdownContent from "./dropdown-content";

type Position = "top" | "right" | "bottom" | "left";

type DropdownProps = {
  className?: string;
  defaultIndex?: number;
  disabled?: boolean;
  calculatePosition?: string;
  horizontalPosition?: string;
  initiallyOpened?: boolean;
  matchTriggerWidth?: string;
  onClick?: (i: number) => void;
  preventScroll?: string;
  renderInPlace?: string;
  verticalPosition?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  display: "inline-block",
  position: "bottom" as Position,
  offset: 5,
  opened: false,
};

interface IDropdownContext {
  disabled?: boolean;
  position?: string;
  index?: number;
  rect?: DOMRect;
  handleSelect?: (selected: number) => void;
  handleOpen?: (open: boolean) => void;
  isOpen?: boolean;
  triggerRef?: any;
  offset?: number;
}

export const DropdownContext = createContext<IDropdownContext>({
  index: undefined,
  isOpen: false,
});

interface IDropdown extends FC<DropdownProps> {
  Trigger: typeof DropdownTrigger;
  Divider: typeof DropdownDivider;
  Item: typeof DropdownItem;
  Content: typeof DropdownContent;
}

const Dropdown: IDropdown = (props) => {
  const {
    children,
    className,
    display,
    defaultIndex,
    disabled,
    opened,
    position,
    offset,
    onClick,
    ...restProps
  } = props;

  const [currentActive, setActive] = useState(defaultIndex);
  const [isOpen, setOpen] = useState(opened);
  const [rect, setRect] = useState<DOMRect | undefined>();

  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resetRect = () => {
      if (triggerRef.current) {
        setRect(triggerRef.current.getBoundingClientRect());
      }
    };
    resetRect();
    window.addEventListener("resize", resetRect);

    const contains = (e: MouseEvent) => {
      if (
        !(e.target as HTMLDivElement).className.includes("Dropdown__trigger") &&
        !disabled &&
        !triggerRef.current?.contains(e.target as Element)
      ) {
        setOpen(false);
      }
    };
    window.addEventListener("click", contains as any);
    return () => {
      window.removeEventListener("resize", resetRect);
      window.removeEventListener("click", contains as any);
    };
  }, []);

  const classes = classnames(
    "Dropdown relative inline-block",
    className,
    display
  );

  const handleSelect = (index: number) => {
    setActive(index);
    if (onClick) {
      onClick(index);
    }
  };
  const handleOpen = (open: boolean) => {
    if (!disabled) {
      setOpen(open);
    }
  };

  const passedContext: IDropdownContext = {
    index: typeof currentActive !== "undefined" ? currentActive : undefined,
    disabled,
    position,
    isOpen,
    rect,
    offset,
    handleOpen,
    handleSelect,
  };
  return (
    <div className={classes} ref={triggerRef} {...restProps}>
      <DropdownContext.Provider value={passedContext}>
        {children}
      </DropdownContext.Provider>
    </div>
  );
};

Dropdown.defaultProps = defaultProps;
Dropdown.displayName = "Dropdown";
Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Divider = DropdownDivider;
Dropdown.Item = DropdownItem;

export default Dropdown;
