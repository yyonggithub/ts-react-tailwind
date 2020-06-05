import React, {
  FC,
  createContext,
  useState,
  useRef,
  useEffect,
  MouseEventHandler,
  MouseEvent,
} from "react";
import classnames from "classnames";

type Position = "top" | "right" | "bottom" | "left";

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
  position: "top" as Position,
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

  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resetRect = () => {
      if (triggerRef.current) {
        setRect(triggerRef.current.getBoundingClientRect());
      }
    };
    resetRect();
    window.addEventListener("resize", resetRect);
    return () => {
      window.removeEventListener("resize", resetRect);
    };
  }, []);

  useEffect(() => {
    const contains = (e: MouseEvent) => {
      if (
        !(e.target as HTMLDivElement).className.includes("Dropdown__trigger")
      ) {
        const have = triggerRef.current?.contains(e.target as Element);
        setOpen(have ? true : false);
      }
    };
    document.addEventListener("click", contains as any);
    return () => {
      document.removeEventListener("click", contains as any);
    };
  }, []);

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

  const passedContext: IDropdownContext = {
    index: typeof currentActive !== "undefined" ? currentActive : undefined,
    disabled,
    position,
    isOpen,
    rect,
    handleOpen,
    handleSelect,
  };
  return (
    <div className={classes} ref={triggerRef}>
      <DropdownContext.Provider value={passedContext}>
        {children}
      </DropdownContext.Provider>
    </div>
  );
};

Dropdown.defaultProps = defaultProps;
Dropdown.displayName = "Dropdown";

export default Dropdown;
