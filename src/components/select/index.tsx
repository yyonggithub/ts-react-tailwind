import React, {
  FC,
  createContext,
  useRef,
  useState,
  MouseEventHandler,
} from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import Icon from "../icon";
import Button from "../button";

type SelectProps = {
  className?: classnamesType;
  value?: string | number;
  disabled?: boolean;
  placeholder?: string | number;
  position?: "top" | "left" | "right" | "bottom";
  // calculatePosition?: string;
  // horizontalPosition?: string;
  // initiallyOpened?: boolean;
  // matchTriggerWidth?: string;
  onClose?: () => void;
  onOpen?: () => void;
  preventScroll?: string;
  renderInPlace?: string;
  verticalPosition?: string;
  onChange?: (v: string | number) => void;
  isOpen?: boolean;
} & Partial<typeof defaultProps>;

const defaultProps = {
  display: "inline-block",
  extendIcon: "outline-small-down-16",
  allowClear: false,
};

interface IPosition {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

interface ISelectContext {
  value?: string | number;
  handleChange?: (v: string | number) => void;
  isOpen: boolean;
  handleOpen?: () => void;
}

export const SelectContext = createContext<ISelectContext>({
  value: undefined,
  isOpen: false,
});

const Select: FC<SelectProps> = (props) => {
  const {
    children,
    className,
    placeholder,
    value,
    disabled,
    display,
    isOpen,
    extendIcon,
    allowClear,
    position,
    onChange,
    ...restProps
  } = props;
  const classes = classnames("Select", className, display);

  const selectRef = useRef<HTMLButtonElement>(null);
  const initProps = {
    x: 0,
    y: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
  };
  const positionRef = useRef<IPosition>(initProps);
  const itemsRef = useRef<HTMLUListElement>(null);
  const positionItemsRef = useRef<IPosition>(initProps);

  const [currentValue, setValue] = useState(value ? value : placeholder || "");
  const handleChange = (v: string | number) => {
    setValue(v);
    if (onChange) {
      onChange(v);
    }
  };

  const [currentOpen, setOpen] = useState(isOpen ? isOpen : false);
  const handleOpen = () => {
    setOpen(!currentOpen);
    console.log(currentOpen);
  };

  const passContext: ISelectContext = {
    value: currentValue,
    isOpen: currentOpen ? currentOpen : false,
    handleChange,
    handleOpen,
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    // e.stopPropagation()
    setOpen(!currentOpen);
    console.log(selectRef.current?.getBoundingClientRect());
    positionRef.current = (selectRef.current as HTMLButtonElement).getBoundingClientRect();
    if (itemsRef.current) {
      positionItemsRef.current = (itemsRef.current as HTMLUListElement).getBoundingClientRect();
    }
  };

  const handleIconClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    placeholder ? setValue(placeholder) : setValue("");
  };

  const iconUrl = (() => {
    if (currentValue === placeholder || currentValue === "") {
      return extendIcon;
    }
    return allowClear ? "outline-remove-12" : extendIcon;
  })();

  const icon = (
    <div
      style={{
        lineHeight: 0,
      }}
      onClick={
        currentValue && currentValue !== "" ? handleIconClick : undefined
      }
    >
      <Icon
        className={classnames(
          "Button__extend transform -mr-1 ml-2 hover:border-primary-dark",
          {
            "opacity-50": disabled,
            "opacity-100": currentOpen,
            "opacity-50 group-hover:opacity-100": !currentOpen,
            relative: allowClear,
            "inline-block": allowClear,
          }
        )}
        icon={iconUrl as string}
      />
    </div>
  );

  // const style = {
  //   top: `${positionRef.current.top}px`,
  //   left: `${positionRef.current.left}px`,
  // };
  // TODO: 定位未完成
  const style = (() => {
    const { top, left, bottom, right, width, height } = positionRef.current;
    const {
      top: ITop,
      left: ILeft,
      bottom: IBottom,
      right: IRight,
      width: IWidth,
      height: IHeight,
    } = positionItemsRef.current;
    switch (position) {
      case "top":
        return {
          bottom: `${IBottom}px`,
          left: `${left}px`,
        };
      case "left":
        return {
          top: `${top}px`,
          left: `${left - width + 8}px`,
        };
      case "right":
        return {
          top: `${top}px`,
          left: `${left + width}px`,
        };
      case "bottom":
        return undefined;
    }
  })();

  return (
    <div className={classes} {...restProps}>
      <SelectContext.Provider value={passContext}>
        <Button
          ref={selectRef}
          disabled={disabled ? true : false}
          onClick={handleClick}
          onChange={(e) => {
            setValue(currentValue);
          }}
        >
          {currentValue}
          {icon}
        </Button>
        {/* {allowClear ? icon : null} */}
        {passContext.isOpen ? (
          <ul
            className="absolute z-dropdown bg-body"
            style={style}
            ref={itemsRef}
          >
            {children}
          </ul>
        ) : null}
      </SelectContext.Provider>
    </div>
  );
};

Select.defaultProps = defaultProps;
Select.displayName = "Select";

export default Select;
